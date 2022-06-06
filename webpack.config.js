const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'development', // 本番用（開発ならdevelopment（圧縮されない））
	entry: './src/js/main.js', // バンドル前のエントリポイント
	output: {
		// バンドル先
		filename: 'main.js',
	},
	optimization: {
		minimizer: [
			// js圧縮
			new TerserPlugin({
				extractComments: true, //trueでコメント削除
				terserOptions: {
					compress: {
						drop_console: false, // trueでconsole.log削除
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env', // デフォルトでES5になるはず
							],
						},
					},
				],
			},
		],
	},
};
