# icon 图标

## 图标列表

<code src="../demo/icon-demo.tsx" inline></code>

## 基本用法

```jsx
import React from 'react';
import { Loading, Apple, Wechat } from '@kite-design/icons-react'

export default () => (
  <>
    <Loading />
    <Apple />
    <Wechat />
  </>
)
```

## 自定义图标

```jsx
import React from 'react';
import Icon from '@kite-design/icons-react'

const HeartSvg = (props) => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024" {...props}>
    <path
      d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const HeartIcon = (props) => {
  return <Icon component={HeartSvg} {...props} />
}
export default () => (
  <>
    <HeartIcon spin />
    <HeartIcon rotate={90} />
    <HeartIcon style={{ color: 'hotpink' }} />
  </>
)
```

## 使用iconfont

```jsx
import React from 'react';
import { createFromIconfontCN } from '@kite-design/icons-react'

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  extraCommonProps: {
    testProps: 'test',
  },
})
export default () => (
  <>
    <MyIcon type='icon-tuichu' style={{color: 'hotpink'}} />
    <MyIcon type='icon-facebook' />
    <MyIcon type='icon-twitter' />
  </>
)
```

## API

### 通用图标

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 设置图标的样式名 | `string` | - |
| rotate | 设置按钮类型 | `boolean` | false |
| style | 设置图标的样式，例如 fontSize 和 color | `CSSProperties` | - |
| spin | 是否有旋转动画 | `boolean` | false |

### 自定义 Icon

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | `ComponentType<CustomIconComponentProps>	` | - |
| rotate | 设置按钮类型 | `boolean` | false |
| style | 设置图标的样式，例如 fontSize 和 color | `CSSProperties` | - |
| spin | 是否有旋转动画 | `boolean` | false

### 自定义 font 图标
在iconfont上生成symbol引用方式的 js 文件链接，并将该链接传入 createFromIconfont 方法中的 scriptUrl 参数，即可使用 iconfont 项目中的图标
createFromIconfont options的配置如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extraCommonProps | 给所有的 svg 图标 `<Icon />` 组件设置额外的属性 | `{ [key: string]: any }` | {} |
| scriptUrl | 	iconfont.cn 项目在线生成的 js 地址 | `string \| string []` | false |

自定义的font图标接受的props属性如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | iconfont.js对应的svg名称 | `string` | - |
| rotate | 设置按钮类型 | `boolean` | false |
| style | 设置图标的样式，例如 fontSize 和 color | `CSSProperties` | - |
| spin | 是否有旋转动画 | `boolean` | false
