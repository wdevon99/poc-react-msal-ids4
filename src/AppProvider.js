import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

import App from "./App";

// MSAL configuration
const configuration = {
  auth: {
    clientId: "e9df13b3-e83c-3f66-ba4c-0567ca502f23",
    authority: "https://dev-login.unieconomy.no/",
    knownAuthorities: ["https://dev-login.unieconomy.no/"],
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000",
    navigateToLoginRequestUrl: true,
    protocolMode: "OIDC",
  }
}

const pca = new PublicClientApplication(configuration);

// Component
const AppProvider = () => (
  <MsalProvider instance={pca}>
    <App />
  </MsalProvider>
);

export default AppProvider