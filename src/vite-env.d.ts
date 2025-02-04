/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ACCESS_TOKEN: string;
  readonly VITE_API_URL: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_IMAGE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
