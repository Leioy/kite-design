# Grid 栅格

## 基础栅格

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
)
```

## 区块间隔

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

const style = { background: '#0092ff', padding: '8px 0' }
export default () => (
  <>
    <Row gutter={8}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
)
```

## 左右偏移

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
)
```

## 栅格排序

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <Row>
      <Col span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
  </>
)
```

## 水平布局

使用Row的justify属性排版子元素水平对齐方式。

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <div style={{ color: '#000' }}>start</div>
    <Row justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <div style={{ color: '#000' }}>center</div>
    <Row justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <div style={{ color: '#000' }}>right</div>
    <Row justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <div style={{ color: '#000' }}>space-between</div>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <div style={{ color: '#000' }}>space-around</div>
    <Row justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </>
)
```

## 垂直布局

使用Row的align属性排版子元素垂直对齐方式。

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

const DemoBox = props => <p style={{ height: props.value }}>{props.children}</p>
export default () => (
  <>
    <div style={{ color: '#000' }}>Align Top</div>
    <Row justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
    <div style={{ color: '#000' }}>Align Middle</div>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
    <div style={{ color: '#000' }}>Align Bottom</div>
    <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </>
)
```

## Flex排序

使用Col元素的order属性改变元素的排序。

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
  </>
)
```

## 响应式布局

参考 Bootstrap 的响应式设计[BootStrap](https://getbootstrap.com/docs/3.4/css/)，预设六个响应尺寸：xs sm md lg xl xxl。

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        Col
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        Col
      </Col>
    </Row>
  </>
)
```

## 其他属性的响应式

span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。  
其中 xs={6} 相当于 xs={{ span: 6 }}。

```jsx
import React from 'react';
import { Row, Col } from 'kite-design'

export default () => (
  <>
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        Col
      </Col>
    </Row>
  </>
)
```

## useBreakPointHook

使用 useBreakpoint Hook 个性化布局

```jsx
import React from 'react';
import { Grid } from 'kite-design'

const { useBreakpoint } = Grid
export default () => {
  const screens = useBreakpoint();
  return <>
    Current break point:{' '}
    {Object.entries(screens)
           .filter(screen => !!screen[1])
           .map(screen => (
             <span className="tag" key={screen[0]}>
               {screen[0]}
             </span>
           ))}
  </>
}
```

## API

### Row

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 垂直对齐方式 | `top \| middle \| bottom` | - |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24} | `number \| object` | 0 |
| justify | 水平排列方式 | `start \| end \| center \| space-between \| space-around` | start |

### Col

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| flex | flex 布局属性 | `number \| string` | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | `number` | 0 |
| order | 栅格顺序 | `number` | 0 |
| pull | 栅格向左移动格数 | `number` | 0 |
| push | 栅格向右移动格数   | `number` | 0 |
| span | 栅格占位格数，为 0 时相当于 display: none   | `number` | - |
| xs | 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | - |
| sm | 屏幕 >= 576px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | - |
| md | 屏幕 >= 768px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | - |
| lg | 屏幕 >= 992px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | - |
| xl | 屏幕 >= 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | - |
| xxl | 屏幕 >= 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number \| object` | - |
