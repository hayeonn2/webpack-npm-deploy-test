const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      // svg
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/,
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024, // 2kb 미만은 base64형태로 사용
          },
        },
        generator: {
          filename: "static/media/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
      // {
      //   test: /\.svg$/i,
      //   oneOf: [
      //     {
      //       type: "asset/resource",
      //       generator: {
      //         //remove this if not required
      //         filename: "images/[name][ext]",
      //       },
      //       issuer: {
      //         //Only use file-loader aka assets/resource for svg's referenced in css/scss
      //         and: [/\.(sa|sc|c)ss$/],
      //       },
      //     },
      //   ],
      // },
      // {
      //   //use SVGR for imports in js/jsx files
      //   test: /\.svg$/i,
      //   use: [
      //     "babel-loader",
      //     {
      //       loader: "@svgr/webpack",
      //       options: {
      //         babel: false,
      //         icon: true,
      //       },
      //     },
      //   ],
      //   issuer: /\.[jt]sx?$/,
      // },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
};
