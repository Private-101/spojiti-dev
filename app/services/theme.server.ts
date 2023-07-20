import { createCookieSessionStorage } from "@remix-run/node";

import { isTheme } from "~/context/theme.context";
import { Theme } from "~/context/theme.context";

// Make use to set the environment variable SESSION_SECRET before running the code
const sessionSecret = process.env.SESSION_SECRET ?? "DEFAULT_SECRET";

/* The code is creating a session storage object using the 
`createCookieSessionStorage` function from the `@remix-run/node` package. */
const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "my_remix_theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

/**
 * Retrieves and manages a theme session for the given request.
 *
 * @param {Request} request - The request object.
 * @return {Promise<{
*   getTheme: () => Theme,
*   setTheme: (theme: Theme) => void,
*   commit: () => Promise<void>
* }>} - An object with methods to get, set, and commit the theme session.
*/
async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : Theme.LIGHT;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };