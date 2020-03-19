const path = require("path");
module.exports = [
  {
    node: {
      fs: "empty",
      __dirname: false
    },
    target: "node",
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
      ]
    },
    entry: "./server/index.js",
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    }
  },
  {
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        }
      ]
    },
    entry: "./client/index.js",
    output: {
      filename: "client.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
    }
  }
];
