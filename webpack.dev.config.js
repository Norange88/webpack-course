const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// asset/resourse - файл будет перемещён в /dist
// asset/inline - содержимое файла будет вставлено прямо в код
// asset - webpack сам решит, inline или resourse (файл менее 8кб - inline)
// asset/source - содержимое файла будет вставлено прямо в код (без изменений, текстом)

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'), // путь до папки с билдом
    publicPath: '', // сурс будет подставлен перед всеми assets
    // Дефолтный клин вместо CleanWebpackPlugin. У него меньше опций
    // clean: {
    //   dry: true, // вебпак напишет список, что удалять
    //   keep: /\.css$/, // файлы, которые оставить
    // },
  },
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /(.png|.jpg)$/,
        type: 'asset/resource',
        // Вставлять инлайн или как отдельный файл в зависимости от размера ассета
        // type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 3 * 1024, // 3kb
        //   },
        // },
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        // Лоадеры исполняются справа-налево
        // css-loader вставляет css в js, style-loader извлекает его и вставляет в тег <style>
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        // sass-loader конвертирует scss в css
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        // sass-loader конвертирует scss в css
        exclude: ['/node_modules', /@babel(?:\/|\\{1,2})runtime|core-js/],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: path.resolve(__dirname, 'babel.config.js'),
            compact: false,
            cacheDirectory: true,
            sourceMaps: false,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new CleanWebpackPlugin({ // по дефолту чистит папку из output.path
      cleanOnceBeforeBuildPatterns: [
        '**/*', // всё в папке из output.path
        path.join(process.cwd(), 'build/**/*'), // просто для теста чистим так же папку билд
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
