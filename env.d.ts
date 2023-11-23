/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_GRAV_NO_REC_SEARCH_HOST_URL: string
    readonly VITE_GRAV_NO_REC_SEARCH_API_URL: string
    readonly VITE_GRAV_NO_REC_SEARCH_PORT: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }