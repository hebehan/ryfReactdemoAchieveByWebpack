module.exports = {
    mode:'development',
    entry:'./src/app/index.js',
    output:{
        filename:'bundle.js',
        path:__dirname
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!postcss-loader!less-loader?{modifyVars:{"@primary-color":"#ff00ff"}}',
            //     options:{
            //         javascriptEnabled:true
            //     }
            //   }
            {
                test: /\.less$/, 
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            // "modifyVars":{ "@primary-color": "#1DA57A"},
                            "javascriptEnabled":true
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback:true
    }
}
