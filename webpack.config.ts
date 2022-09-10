import path from 'path';
import { Configuration as WebpackConfiguration , DefinePlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const webpackConfig = (): Configuration => ({
    entry: './src/index.tsx',
    ...(process.env.production || !process.env.development
        ? {}
        : { devtool: 'eval-source-map' }),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData:'@import "src/variables.scss"; @import "src/mixins.scss";',
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
            template: './src/index.html',
        }),
        // DefinePlugin allows you to create global constants which can be configured at compile time
        new DefinePlugin({
            'process.env': process.env.production || !process.env.development,
        }),
    ],
});

export default webpackConfig;