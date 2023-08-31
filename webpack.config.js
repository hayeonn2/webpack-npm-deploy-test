const path = require("path");
const webpack = require("webpack");
const { EsbuildPlugin } = require("esbuild-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new EsbuildPlugin({
        target: "es2015", // Syntax to transpile to (see options below for possible values)
        css: true,
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  module: {
    rules: [
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
          filename: "static/media/[name][ext]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "esbuild-loader",
            options: {
              minify: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CompressionPlugin({
      test: /\.(js|css|html)$/,
      algorithm: "gzip", // gzip으로 압축
      threshold: 10240, // 10kb 이상 압축
      minRatio: 0.8,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[id].css",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
    new TerserPlugin({
      terserOptions: {
        compress: {},
      },
    }),
  ],
};
