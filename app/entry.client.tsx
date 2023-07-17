/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import useLocalDarkMode from "~/hooks/useLocalDarkMode";

// import { registerFocusTrap } from "~/elements/focus-trap.client";

// registerFocusTrap();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );

  useLocalDarkMode();
});


window.addEventListener("beforeunload", (event: BeforeUnloadEvent) => {
  // Returns the type of event, e.g. "click", "hashchange", or "submit".
  const type = event.type;
  console.log(`WINDOW EVENT: beforeunload\nType: ${type}`);
  // navigate('/logout');
});