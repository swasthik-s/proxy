import { join } from "path";
import pkg from "./package.json";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2025-04-20",
  srcDir: "./src",
  runtimeConfig: {
    version: pkg.version
  },
  alias: {
    "@": join(__dirname, "src")
  },
  // Exclude problematic files for Netlify deployment
  ignore: [
    "**/node_modules/**/es5-ext/**/*#*/**",
    "**/plugins/node_modules/**"
  ]
});
