项目使用react开发，基于umi构建（具体请参阅umi官方文档）。涉及dva,antd等。


yhcsxAdmin
├── package.json
├── public
│   ├── APIConnection.min.js
│   ├── favicon.png
│   └── stacktrace.min.js
├── src
│   ├── app.js
│   ├── assets
│   │   ├── img
│   │   └── js
│   ├── components---------------------------公用组件目录
│   │   ├── AutoComplete
│   │   ├── Editor
│   │   ├── HBasicLayout
│   │   ├── Hook
│   │   ├── ListInfo
│   │   ├── Page
│   │   ├── SearchFormPro
│   │   ├── UploadFile
│   │   └── UploadImg
│   ├── config-------------------------------项目配置文件
│   │   ├── constants.js
│   │   ├── default.js
│   │   ├── menus.js
│   │   └── server.js
│   ├── global.css
│   ├── layouts
│   │   ├── __tests__
│   │   ├── index.js
│   │   ├── index.less
│   │   └── model.js
│   ├── models
│   │   └── baseModel.js
│   ├── pages--------------------------------页面组件（根据文件名区分模块）
│   │   ├── company
│   │   ├── document.ejs---------------------入口模版文件
│   │   ├── factory
│   │   ├── home
│   │   ├── index.js
│   │   ├── join
│   │   ├── login
│   │   ├── news
│   │   ├── partner
│   │   ├── talk
│   │   └── userManage
│   └── utils---------------------------------工具方法
│       ├── baseModel
│       ├── baseSever.js
│       ├── dva.js
│       ├── env.js
│       ├── form
│       ├── isEmpty.js
│       ├── localStorage.js
│       ├── model.factory.js
│       ├── nextTick.js
│       ├── object.js
│       ├── portal.js
│       ├── share.js
│       ├── table
│       └── type.js
├── readme.md
├── webpack.config.js
└── yarn.lock
