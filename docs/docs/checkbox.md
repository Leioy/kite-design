# checkbox 多选框

## 基础用法

简单的 checkbox。

```jsx

import React from 'react';
import { Checkbox } from 'kite-design'

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
}

export default () => (
  <>
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
  </>
)

```

## 不可用

checkbox 不可用。

```jsx

import React from 'react';
import { Checkbox } from 'kite-design'

export default () => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <Checkbox defaultChecked disabled />
  </>
)

```

## checkbox组

```jsx

import React from 'react';

import { Checkbox } from 'kite-design';

export default () => {
  const onChange = checked => console.log('checked =', checked)
  return (
    <>
      <Checkbox.Group defaultValue={['B']} onChange={onChange}>
        <Checkbox value="A">A</Checkbox>
        <Checkbox value="B">B</Checkbox>
        <Checkbox value="C">C</Checkbox>
      </Checkbox.Group>
    </>
  )
}

```

## 使用options快速生成checkbox组

```jsx

import React from 'react'
import { Checkbox } from 'kite-design'

export default () => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
  ];
  const onChange = checked => console.log('checked=', checked)
  return (
    <>
      <Checkbox.Group options={plainOptions} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <Checkbox.Group options={options} defaultValue={['Orange']} onChange={onChange} />
      <br />
      <Checkbox.Group options={optionsWithDisabled} defaultValue={['Orange']} onChange={onChange} />
    </>
  )
}

```

## 全选

使用受控组件实现全选效果

```jsx

import React from 'react';
import { Checkbox } from 'kite-design'

export default () => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange']
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);
  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <>
      <Checkbox className="xxx" indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>Check
        all</Checkbox>
      <br />
      <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  )
}

```

## 自定义颜色

```jsx
import React from 'react';
import { Checkbox } from 'kite-design'

export default () => {
  return <>
    <Checkbox defaultChecked color="hotpink" />
    <Checkbox defaultChecked color="#1976d2" />
    <Checkbox defaultChecked color="#dc004e" />
    <Checkbox defaultChecked color="#18821c" />
    <Checkbox defaultChecked color="#d27e15" />
    <Checkbox defaultChecked color="#cc2b2b" />
  </>
}
```

## 布局

```jsx
import React from 'react';
import { Checkbox, Row, Col } from 'kite-design'

export default () => (
  <>
    <Checkbox.Group defaultValue={['A', 'B', 'D']}>
      <Row>
        <Col span={8}>
          <Checkbox value="A">A</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox color="secondary" value="B">B</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox color="success" value="C">C</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox color="warning" value="D">D</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox color="danger" value="E">E</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  </>
)
```

## API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | `boolean` | false |
| defaultChecked | 初始是否选中 | `boolean` | false |
| disabled | 失效状态 | `boolean` | false |
| color | 自定义颜色 | `string` | - |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | `boolean` | false |
| onChange | 变化时回调函数 | `(e:Event) => void` | - |

### CheckboxGroup

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | `string[]` | [] |
| disabled | 整组失效 | `boolean` | false |
| name | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | `string` | - |
| options | 指定可选项 | `string[] \| object[]` | [] |
| value | 指定选中的选项 | `string[]` | [] |
| color | 自定义整组颜色 | `string` | - |
| onChange | 变化时回调函数 | `(checkedValue:string[]) => void` | [] |

### option

```ts
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
  color?: string
}
```
