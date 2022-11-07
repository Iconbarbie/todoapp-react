const path = require("path");

module.exports = (env) => {
  const isproduction = env === "production" 
  return  {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    devtool: isproduction ? "source-map": "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
    },
  };
}

