# Switch 开关

## 基本用法

```jsx
import React, { useState } from 'react';
import { Switch } from 'kite-design'

export default () => (
  <>
    <Switch defaultChecked />
  </>
)
```

## 不可用

```jsx
import React, { useState } from 'react';
import { Switch, Button } from 'kite-design'

export default () => {
  const [disabled, set] = useState(false)
  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <Button color="primary" onClick={() => set(!disabled)}>toggle disabled</Button>
    </>
  )
}
```

## 更改颜色

```jsx
import React from 'react';
import { Switch } from 'kite-design'

export default () => (
  <>
    <Switch defaultChecked color="primary" />
    <Switch defaultChecked color="secondary" />
    <Switch defaultChecked color="success" />
    <Switch defaultChecked color="warning" />
    <Switch defaultChecked color="danger" />
  </>
)
```
## 两种大小

```jsx
import React from 'react';
import { Switch } from 'kite-design'
export default () => (
  <>
    <Switch defaultChecked color="primary" />
    <Switch defaultChecked color="primary" size="small" />
  </>
)
```

## 加载中

```jsx
import React, { useState } from 'react';
import { Switch } from 'kite-design'

export default () => {
  const switchArray = [
    { id: 1, color: 'default', loading: false },
    { id: 2, color: 'primary', loading: false },
    { id: 3, color: 'secondary', loading: false },
    { id: 4, color: 'success', loading: false },
    { id: 5, color: 'warning', loading: false },
    { id: 6, color: 'danger', loading: false },
  ]
  const [loadings, set] = useState(switchArray)
  const onChange = (checked, e, item) => {
    set(loadings.map(switchItem => switchItem.id === item.id ? { ...switchItem, loading: true } : { ...switchItem }))
    setTimeout(() => {
      set(loadings.map(switchItem => switchItem.id === item.id ? { ...switchItem, loading: false } : { ...switchItem }))
    }, 3000)
  }
  return (
    <>
      {loadings.map(item => {
        return <Switch defaultChecked key={item.id} color={item.color} loading={item.loading}
                       onChange={(checked, e) => {onChange(checked, e, item)}} />
      })}
    </>
  )
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 设置禁用状态 | `boolean` | false |
| size | 设置开关大小 | `default \| small` | default |
| defaultChecked | 初始是否选中 | `boolean` | false |
| checked | 指定当前是否选中(受控属性) | `boolean` | false |
| className | Switch 器类名 | `string` | - |
| loading | 加载状态 | `boolean` | false |
| onChange | 变化时回调函数 | `(checked: boolean, event: Event) => void` | - |
| onClick | 变化时回调函数 | `(checked: boolean, event: Event) => void` | - |
