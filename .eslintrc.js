module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: [
    "next",
    "next/core-web-vitals",
    "next/babel",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    semi: ["error", "always"],
  },
};
