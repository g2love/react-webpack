# react-webpack 简单的使用

1、webpack环境安装（如果已经安装就跳过此项）
	npm i webpack webpack-dev-server -g
2、解读目录结构
	a、根目录下的下views是存放文件（html/css/js）
	b、根目录下的node_modules是存放各种需要的库的（如果没有此目录，可以执行 npm install）
	c、根目录下的package.json是webpack的包管理文件
	d、根目录下的webpack.config.js是webpack的配置文件，包括配置各个页面的处理
3、编写自己的页面及代码
4、根目录下执行webpack命令
	执行的结果是在根目录下生产一个build文件夹，里面存放生成的最终页面文件，可以将build文件放在任意其它支持html的环境下运行