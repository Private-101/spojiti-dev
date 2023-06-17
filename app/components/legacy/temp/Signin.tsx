/*
import { useEffect } from "react";
import { ui } from "~/firebase";

const SignIn = () => {
  useEffect(() => {
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: () => {
          // Handle successful sign-in
          return false;
        },
      },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: "/account", // where to redirect after a successful sign in
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      tosUrl: "<your-tos-url>",
      privacyPolicyUrl: "<your-privacy-policy-url>",
    });
  }, []);

  return <div id="firebaseui-auth-container" />;
};

export default SignIn;
*/