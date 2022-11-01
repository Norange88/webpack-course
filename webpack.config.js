const path = require('path');

// asset/resourse - файл будет перемещён в /dist
// asset/inline - содержимое файла будет вставлено прямо в код
// asset - webpack сам решит, inline или resourse (файл менее 8кб - inline)
// asset/source - содержимое файла будет вставлено прямо в код (без изменений, текстом)

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'), // путь до папки с билдом
    publicPath: '/dist/', // сурс будет подставлен перед всеми assets
  },
  mode: 'none',
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
    ],
  },
};
