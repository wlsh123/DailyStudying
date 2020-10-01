react配置：
    1. 配置webpack+babel。让webpack指导babel翻译ES6语法。
        |1.1 npm init --创建package.js
        |1.2 npm install --save-dev webpack --安装webpack，设置为项目依赖
            前提是必须在全局下安装了webpack  （-g）
        |1.3 创建一个webpack.config.js 文件，这个文件是webpack工作的参考。
            参考：https://www.webpackjs.com/configuration/
        |1.4 安装babel-loade.  npm install --save-dev babel-loader. 
            有包依赖，需要先安装babel-core
        |1.5 安装react npm install --save-dev react
        |1.6 安装react-dom  npm install --save-dev react-dom


不会配置，就直接使用create-react-app 快速构建 React 开发环境
$npm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start