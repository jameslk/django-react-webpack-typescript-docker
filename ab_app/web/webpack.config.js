// Based on http://geezhawk.github.io/using-react-with-django-rest-framework

//require our dependencies
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var outputDir = path.resolve(path.join(__dirname, 'compiled-assets'));

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    //the entry point we created earlier. Note that './' means
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
    entry: {
        index: './src/index.tsx',
        shared: './src/shared.ts',
    },

    output: {
        //where you want your compiled bundle to be stored
        path: outputDir,
        //naming convention webpack should use for your files
        filename: '[name]-[hash].js',
    },

    plugins: [
        new CleanWebpackPlugin(outputDir),

        //tells webpack where to store data about your bundles.
        new BundleTracker({path: __dirname, filename: 'webpack-stats.json'}),

        //makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        // Vendor/shared code splitting
        // https://webpack.js.org/guides/code-splitting-libraries/
        new webpack.optimize.CommonsChunkPlugin({
            names: ['shared', 'manifest'] // Specify the common bundle's name.
        }),

        // Hoisting
        new webpack.optimize.ModuleConcatenationPlugin()
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,

                loaders: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'es2016', 'es2017'],
                            plugins: [
                                'transform-async-to-generator',
                                'transform-runtime'
                            ]
                        }
                    },

                    'awesome-typescript-loader'
                ]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
};