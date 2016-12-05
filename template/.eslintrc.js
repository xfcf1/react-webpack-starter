module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "standard",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'no-debugger': 0
  }
};
