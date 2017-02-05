module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "no-unused-vars": 0,
    "no-console": 1,
  },
  "globals": {
    "branch": true,
    "swal": true,
    "Promise": true,
    "Chartist": true
  },
};
