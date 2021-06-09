const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'production',
    "entry":"./src/index.js",
    "output":{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer:{
       contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:"babel-loader"
            },{
                test:/\css$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}