# react-imvc-demo

最近学习一下同构的思想，使用React-imvc，不用React全家桶

***

react-imvc-template
--------------

<https://github.com/Lucifier129/react-imvc-template>

***

* 同构设计：ISOMORPHIC-MVC
* 同构代码：一段代码，既可以运行在浏览器端，也可以运行在服务端（node.js）
* 同构渲染：renderToString VS renderToDOM
* 同构 MVC：服务端和浏览器端共用一套 MVC 框架

### 使用到的技术

* react/react-lite
* relite
* webpack
* whatwg-fetch/node-fetch
* pm2
* and more

***

### 目录结构

```
├── bin                 // Node启动文件
├── build               // 构建服务和webpack配置
├── scripts             // 启动、关闭脚本
├── server              // 服务端渲染文件
├── src                 // 源代码目录
│   ├── app-demo   	    // demo目录
│   │   ├── components  // 项目共享组件
│   │   ├── share       // 项目共享方法
│   │   ├── home        // 具体页面
│   │   │   ├── controller.js  
│   │   │   ├── model.js       
│   │   │   └── view.js        
│   │   └── *           // 其他页面
│   ├── app-*           // 其他项目
│   ├── components      // 共享组件
│   ├── share           // 共享方法
│   ├── index.js        // js入口
│   └── routes.js       // 路由
├── static              // 项目build生成文件，存放css等静态文件
├── package.json        // 项目配置文件
└── README.md           // 项目介绍
```

***

#### 比如 app-learn 下面创建一个新的页  

> View 是 React 写的， Model 是 redux-like 的简化版库 relite， Controller 是一个带生命周期的 ES2015 Classes类。

> Model 包含2个概念 :  
    1. initialState 是页面的状态树，包含所有数据  
    2. actions 接受2个参数(state,payload) state是最初的 initialState 然后变成 actions 返回的 new state
  
##### View , Model 都将被挂载到Controller里 ，Model 的 2个组成部分将被用来创建 controller.store

react-imvc 会自动把 View 和 state 绑定起来，如果state改变将会自动刷新View
    
    