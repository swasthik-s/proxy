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
  // Configure rollup to exclude problematic packages
  rollupConfig: {
    external: ['es5-ext'],
    plugins: []
  },
  // Additional build configuration for Netlify
  experimental: {
    wasm: false
  }
});
