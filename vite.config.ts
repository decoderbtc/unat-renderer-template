import { defineConfig, loadEnv } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      /**
       * custom plugin to ensure the script tag has the correct attributes
       * necessary because Vite strips attributes from the script tag during the build
       */
      {
        name: "script-attribute-injector",
        enforce: "post",
        transformIndexHtml(html: string) {
          const regex = /<script(.*?)/gi;
          const replacement = `<script id="preview" mint="${env.VITE_MINT_INSCRIPTION_ID}"$1`;
          return html.replace(regex, replacement);
        },
      },
      viteSingleFile(),
    ],
  };
});
