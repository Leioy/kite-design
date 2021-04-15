# radio 单选

## 基本用法

```jsx
import React from 'react';
import { Radio } from 'kite-design'

export default () => (
  <>
    <Radio>A</Radio>
  </>
)
```

## 不可用

在Radio或者Radio.Group上设置禁用状态

```jsx
import React, { useState } from 'react';
import { Radio, Button } from 'kite-design'

export default () => {
  const [disabled, set] = useState(false)
  return (
    <>
      <Radio disabled={disabled}>A</Radio>
      <Radio disabled={disabled} defaultChecked>B</Radio>
      <br></br>
      <Button color="primary" onClick={() => set(!disabled)}>toggle disabled</Button>
    </>
  )
}
```

## 自定义颜色

```jsx
import React from 'react';
import { Radio } from 'kite-design'
export default () => (
  <>
    <Radio color="hotpink" defaultChecked>A</Radio>
    <Radio color="#18821c" defaultChecked>A</Radio>
    <Radio color="#d27e15" defaultChecked>A</Radio>
    <Radio color="#cc2b2b" defaultChecked>A</Radio>
  </>
)
```

## 单选组

```jsx
import React, { useState } from 'react';
import { Radio } from 'kite-design'

export default () => {
  const [value, setValue] = React.useState(2);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4} disabled>D</Radio>
    </Radio.Group>
  )
}
```

## API

### Radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | false |
| defaultChecked | 初始是否选中	 | `boolean` | false |
| disabled | 禁用 Radio	 | `boolean` | false |
| value | 根据 value 进行比较，判断是否选中	 | `any` | - |
| color | 设置单选框的颜色	 | `string` | - |

### RadioGroup
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 用于设置当前选中的值(受控属性) | `any` | - |
| defaultValue | 默认选中的值	 | `any` | - |
| disabled | 禁用 Radio	 | `boolean` | false |
| color | 设置所有单选框的颜色	 | `string` | - |
| onChange | 选项变化时的回调函数	 | `(e:Event) => void` | - |
