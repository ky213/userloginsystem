const path =require('path');
const clean = require('clean-webpack-plugin');

module.exports={
    entry:["babel-polyfill","./src/app.js"],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
    plugins:[
     
    ],
}