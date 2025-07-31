import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser }
  },
  {
    files: ["**/.eslintrc.js", "**/*.config.js", "src/js/shuffle.js"],
    languageOptions: { globals: { ...globals.node } }
  }
];
