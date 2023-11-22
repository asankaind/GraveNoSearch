/* eslint-disable */
import { WebStorageStateStore } from "oidc-client";
export default {
  // set open-id configs
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  authority: `${process.env.VUE_APP_GRAV_NO_REC_SEARCH_AUTHORITY}`,
  client_id: "transporter_client",
  response_type: "code",
  scope: "openid profile grave_api offline_access",
  grant_type: "authorization_code",
  redirect_uri: `${process.env.VUE_APP_GRAV_NO_REC_SEARCH_HOST_URL}/signin-oidc`,
  post_logout_redirect_uri: `${process.env.VUE_APP_GRAV_NO_REC_SEARCH_HOST_URL}/signout-callback-oidc"`,
  silent_redirect_uri: `${process.env.VUE_APP_GRAV_NO_REC_SEARCH_HOST_URL}/signin-oidc`,
  silentRequestTimeout: 10000,
  checkSessionInterval: 2000,
  accessTokenExpiringNotificationTime: 60,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  includeIdTokenInSilentRenew: true,
  acr_values: "tokenIssueEmail",
  sessionMonitor: false
};
