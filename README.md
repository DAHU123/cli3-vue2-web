# cli3-vue2-web

###### 脚手架：@vue/cli@3.12.0，用此脚手架搭建出来的SPA（single page application）应用，其余的一些工具比如vue-router，sass，eslint，axios，vuex，element-ui都是一步一步引入进来的；
- src/api/：把所有跟接口请求相关的都统一在此文件下去集中管理
- src/assets：系统相关的静态资源
- src/components：系统相关的一些组件，公共组件，全局组件
- src/views：业务组件对应的视图
- src/router：整个系统配置路由的地方，src/router/routesMap.js此文件是用来配置静态路由和动态路由的地方，动态路由用来处理权限相关的
- src/store：处理vuex状态管理器相关的
- src/styles/util.scss：系统中用到的全局样式对应的变量，在此文件夹声明好之后，可以在每个组件中去引用
- src/utils：系统用到的公共资源，以后在此文件夹下去扩充

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
