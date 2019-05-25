module.exports = {
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        use: 'ts-loader',
        exclude: /(node_modules|bower_components|assets|public\/)/,
      },
    ],
  },
};
