const path = require("path");
const withImages = require("next-images");
const nextTranslate = require("next-translate");
require("dotenv").config();

module.exports = nextTranslate(
  withImages({
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    publicRuntimeConfig: {
      AQUA_100: "rgb(67, 247, 213)",
    },
    env: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID,
    },
  })
);
