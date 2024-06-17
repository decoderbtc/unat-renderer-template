/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: "https://ordinals.com" | "";
  readonly VITE_MINT_INSCRIPTION_ID: "MINT_INSCRIPTION_ID" | `${string}i0`;
  readonly VITE_RENDERER: "simple" | "svg";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
