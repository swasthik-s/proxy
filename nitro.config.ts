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
  output: {
    dir: '.netlify',
    publicDir: false,
    serverDir: false,
    // Exclude node_modules and other unwanted files
    exclude: ['node_modules', '**/node_modules/**']
  }
});
