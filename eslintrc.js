module.exports = {
    env: {
      es6: true,
      node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "tsconfig.json",
      sourceType: "module",
    },
    extends: [
      "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
      "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      "plugin:promise/recommended",
      "plugin:import/errors",
      "plugin:import/typescript"
    ],
     "settings": {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
          "directory": "../*/tsconfig.json" //runs from package dir
        },
   
      }
    }
  };