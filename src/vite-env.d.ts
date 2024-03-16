/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly TOKEN: string
  readonly BACKEND_URL: string
  readonly CHALLENGES_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
