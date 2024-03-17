/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TOKEN: string
  readonly VITE_PLAYER_CHALLENGE_ID: string
  readonly VITE_PLAYER_CHALLENGE_SET_WINNER: string
  readonly VITE_USERS: string
  readonly VITE_CHALLENGES_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
