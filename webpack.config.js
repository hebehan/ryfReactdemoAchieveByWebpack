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
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
    devServer:{
        historyApiFallback:true
    }
}
