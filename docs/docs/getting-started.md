## 在 create-react-app 中使用

本文会尝试在[create-react-app](https://github.com/facebookincubator/create-react-app)创建的工程中使用`kite-design`组件。

## 安装和初始化

在开始之前，你可能需要安装 [yarn](https://github.com/yarnpkg/yarn/)。

```bash
$ yarn create react-app kite-demo
```

工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。

然后我们进入项目并启动。

```bash
$ cd kite-demo
$ yarn start
```

此时浏览器会访问 http://localhost:3000/ ，看到 `Welcome to React` 的界面就算成功了。

## 引入 kite-design

这是 create-react-app 生成的默认目录结构。

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

现在从 yarn 或 npm 安装并引入 kite-design。

```bash
$ yarn add kite-design
```

修改 `src/App.js`，引入 kite-design 的按钮组件。

```jsx | pure
import React from 'react';
import { Button } from 'kite-desgin';
import './App.css';

function App () {
  return (
    <div className="App">
      <Button color="primary">Button</Button>
    </div>
  )
}

export default App;
```

修改 `src/App.css`，在文件顶部引入 `kite-design/dist/app.css`。

```css
@import '~kite-design/dist/app.css';

.App {
  text-align: center;
}

```

好了，现在你应该能看到页面上已经有了`kite-design`的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的[官方文档](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)。

## 高级配置

我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 kite-design 组件的样式（对前端性能是个隐患）。

此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 [react-app-rewired](https://github.com/timarney/react-app-rewired) （一个对 create-react-app 进行自定义配置的社区解决方案）。

引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 [react-app-rewired@2.x](https://github.com/timarney/react-app-rewired#alternatives) 版本的关系，你还需要安装 [customize-cra](https://github.com/arackaf/customize-cra)。

```
$ yarn add react-app-rewired customize-cra
```

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

然后在项目根目录创建一个 `config-overrides.js` 用于修改默认配置。

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

### 使用 babel-plugin-import

注意：kite-design 默认支持基于 ES module 的 tree shaking，js 代码部分不使用这个插件也会有按需加载的效果。

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件（[原理](/docs/react/getting-started#按需加载)），现在我们尝试安装它并修改 `config-overrides.js` 文件。

```bash
$ yarn add -D babel-plugin-import
```

```diff
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'kite-design',
+     libraryDirectory: 'es',
+     style: true,
+   }),
+ );
```

然后移除前面在 `src/App.css` 里全量添加的 `@import '~kite-design/dist/app.css';` 样式代码


最后重启 `yarn start` 访问页面，kite-design 组件的 js 和 css 代码都会按需加载。

## eject

你也可以使用 create-react-app 提供的 [yarn run eject](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup) 命令将所有内建的配置暴露出来。不过这种配置方式需要你自行探索，不在本文讨论范围内。
