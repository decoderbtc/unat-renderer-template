/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: "https://ordinals.com" | "";
  readonly VITE_MINT_INSCRIPTION_ID: "MINT_INSCRIPTION_ID" | `${string}i0`;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
