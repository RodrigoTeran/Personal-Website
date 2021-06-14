// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();
// export const APP_NAME = publicRuntimeConfig.APP_NAME;

const path = require("path");
require("dotenv").config();

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
  },
  env: {
    
  },
};
