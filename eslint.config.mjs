import js from "@eslint/js";
import globals from "globals";
import eslint from "eslint";
const { defineConfig } = eslint;

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
]);
