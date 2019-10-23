module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "@babel/plugin-transform-flow-strip-types",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-export-default-from",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "optional-require",
    "babel-plugin-idx"
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  },
  sourceMaps: true
};
