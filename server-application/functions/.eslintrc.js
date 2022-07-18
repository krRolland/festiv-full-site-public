module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "indent": "off",
    "quotes": "off",
    "max-len": "off",
    "object-curly-spacing": "off",
    "semi": "off",
    "comma-dangle": "off",
    "padded-blocks": "off",
    "eol-last": "off",
    "no-empty": "off",
    "brace-style": "off"
  },
};
