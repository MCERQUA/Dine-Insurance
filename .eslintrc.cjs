module.exports = {
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  rules: {
    // Basic rules for code quality
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-console": "warn",
    "prefer-const": "error",
  },
  ignorePatterns: [
    "dist/",
    ".astro/",
    "node_modules/",
    "*.d.ts",
  ],
};