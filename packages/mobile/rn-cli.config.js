const projectRoot = __dirname;
const metroConfigHelper = require("react-native-monorepo-helper")
  .metroConfigHelper;

module.exports = metroConfigHelper(projectRoot).generate();
