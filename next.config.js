const path = require("path");
const withImages = require("next-images");
require("dotenv").config();

module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    AQUA_100: "rgb(67, 247, 213)"
  },
  env: {
    
  },
});