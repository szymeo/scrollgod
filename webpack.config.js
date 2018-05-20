const path = require('path');
const webpack = require('webpack');
const express = require('express');

module.exports = {
    entry: './index.js',
    output: {
        library: "ScrollGod",
        libraryTarget: "umd",
        filename: "bundle.js",
        auxiliaryComment: "Test Comment"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["env"]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: 'build'
    }
}