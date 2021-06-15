// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();
// export const APP_NAME = publicRuntimeConfig.APP_NAME;

const path = require("path");
const withImages = require("next-images");
require("dotenv").config();

module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
  },
  env: {
    
  },
});