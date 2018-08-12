module.exports = {
    mode:'development',
    entry:'./src/app/index.jsx',
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
    }
}
