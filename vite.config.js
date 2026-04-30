import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  base: "/my-resume/",
  plugins: [injectHTML()],
});
