/**
 * TODO: For this api endpoint, should a default theme be posted from root on initial visit?
 */
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, createCookieSessionStorage } from "@remix-run/node";
import { isValidTheme, isValidHexColor } from "~/utils";


// custom themes can be set ia string
type Theme = 'light' | 'dark' | string;
// type ThemeAction = 'set-theme' | 'toggle-theme' | string;
enum ThemeAction {
    SET_THEME = 'set-theme',
    TOGGLE_THEME = 'toggle-theme'
};

interface SetThemeAction {
    type: ThemeAction.SET_THEME;
    theme: Theme;
};

interface ToggleThemeAction {
    type: ThemeAction.TOGGLE_THEME;
};

// https://remix.run/docs/en/1.18.1/utils/sessions
// const { getSession, commitSession, destroySession } =
const themeSession =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the same CookieOptions to create one
    cookie: {
      name: "__theme_session__",

      // all of these are optional
      //
      // domain: "remix.run",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      // httpOnly: true,
      // maxAge: 60,
      // path: "/",
      sameSite: "strict",
      secrets: ["r3m1xr0ck5"],
      // secure: true,
    },
  });

interface ThemeLoaderResponse {
    theme: Theme
};

interface ThemeActionErrorResponse {
    success: false;
    message?: string;
};

interface ThemeActionSuccessResponse {
    success: true;
    message: string;
    theme: Theme;
};

type ThemeActionResponse = ThemeActionSuccessResponse | ThemeActionErrorResponse;
type ThemeResponse = ThemeLoaderResponse | ThemeActionResponse;

// a GET endpoint
export async function loader({ request }: LoaderArgs) {
    // const url = new URL(request.url);
    // The searchParams readonly property of the URL interface returns a URLSearchParams object,
    // allowing access to the GET decoded query arguments contained in the URL.
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
    // const theme = new URLSearchParams(url.searchParams);

    const session = await themeSession.getSession(request.headers.get("Cookie"));
    const theme = session.get('theme');
    if (!theme) {
        // TODO: use a media query to get preffered theme
        let defaultTheme = 'light';
        session.set('theme', defaultTheme);
        return json<ThemeResponse>({ theme: defaultTheme }, { status: 200, headers: {
            "Set-Cookie": await themeSession.commitSession(session),
          }, });

        // let errorMessage = `Theme Not Found`;
        // throw new Response("Theme is required", { status: 400 });
        // return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
    };

    if (!isValidTheme(theme) || !isValidHexColor(theme)) {
        // TODO: use a media query to get preffered theme
        let defaultTheme = 'light';
        session.set('theme', defaultTheme);
        return json<ThemeResponse>({ theme: defaultTheme }, { status: 200, headers: {
            "Set-Cookie": await themeSession.commitSession(session),
          }, });

        // let errorMessage = `Invalid Theme`;
        // throw new Response("Theme is required", { status: 400 });
        // return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
    };

    // here, theme is found and validated, so just return the value;
    return json<ThemeResponse>({ theme }, { status: 200 });
  };
  
  
// a POST endpoint
export async function action({ request }: ActionArgs) {
    const session = await themeSession.getSession(request.headers.get("Cookie"));

  const body = await request.formData();
  // action type: set-theme, toggle-theme
  const type = body.get("type");
  if (!type || type.toString() !== ThemeAction.SET_THEME || type.toString() !== ThemeAction.TOGGLE_THEME) {
    let errorMessage = `Action Type Error: Unknown Action`;
    // throw new Response("Type is required", { status: 400 });
    return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
  };

  if (type.toString() === ThemeAction.TOGGLE_THEME) {
    let currentTheme = session.get('theme'); 

    if (!currentTheme || typeof currentTheme !== 'string') {
        let errorMessage = `Error for action type ${type}: Theme Not Set. Please make a GET request first, or use set-theme action instead.`;
        // throw new Response("Theme is required", { status: 400 });
        return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
      };
      // typeof currentTheme === 'string'
      let newTheme = currentTheme === 'dark' ? 'light' : currentTheme === 'light' ? 'dark' : /** currentTheme === valid hex color  */ 'light';
      session.set('theme', newTheme);
        return json<ThemeResponse>({ theme: newTheme }, { status: 200, headers: {
            "Set-Cookie": await themeSession.commitSession(session),
          }, });
  } else if (type === ThemeAction.SET_THEME) {
    const theme = body.get("theme");
    if (!theme || typeof theme !== 'string') {
        let errorMessage = `Theme Error for action type ${type}: Theme must be provided. Did you mean to use toggle-theme action instead?`;
        // throw new Response("Theme is required", { status: 400 });
        return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
    };

    if (!isValidTheme(theme.toString()) || !isValidHexColor(theme.toString())) {
        let errorMessage = `Theme Error for action type ${type}: Theme must be provided. Did you mean to use toggle-theme action instead?`;
        return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
    };

    let sucessMessage = `Action ${type} Successful. New Theme is ${theme}`;
    return json<ThemeResponse>({ success: true, message: sucessMessage, theme: theme }, { status: 200, headers: {
        "Set-Cookie": await themeSession.commitSession(session),
      }, });

  } else {
    let errorMessage = `Unknown Theme Error`;
    return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
  };

  // Unreachable code detected.ts(7027)
  // let errorMessage = `Unknown Theme Error`;
  // return json<ThemeResponse>({ success: false, message: errorMessage }, { status: 200 });
}