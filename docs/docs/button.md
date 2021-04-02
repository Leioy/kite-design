# Button

## 按钮类型

```jsx
import React from 'react';
import { Button } from 'kite-design'

export default () => <>
  <Button>DEFAULT</Button>
  <Button type="primary">PRIMARY</Button>
  <Button type="secondary">SECONDARY</Button>
  <Button type="success">SUCCESS</Button>
  <Button type="warning">WARNING</Button>
  <Button type="danger">DANGER</Button>
</>
```

## 按钮大小

```jsx
import React from 'react'
import { Button } from 'kite-design'

export default () => <>
  <Button size='small'>SMALL</Button>
  <Button>MiDDLE</Button>
  <Button size='large'>LARGE</Button>
</>
```

## 按钮形状-圆形按钮

```jsx
import React from 'react';
import { Button } from 'kite-design'
import { Apple } from '@kite-design/icons-react'

export default () => <>
  <Button shape='circle' type='primary' icon={<Apple />} />
  <Button shape='circle' type='primary' size='small' icon={<Apple />} />
  <Button shape='circle' type='primary' size='large' icon={<Apple />} />
</>
```

## 按钮形状-圆角按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';

export default () => <>
  <Button shape='round' type='primary'>ROUND</Button>
  <Button shape='round' type='primary' size='small'>ROUND</Button>
  <Button shape='round' type='primary' size='large'>ROUND</Button>
</>
```

## 加载中

```jsx
import React, { useState } from 'react';
import { Button } from 'kite-design'

export default () => {
  // const [ loading, setLoading ] = useState(false)
  const [ loadingDelay, setLoadingDelay ] = useState(false)
  setTimeout(() => {
    // setLoading(false)
    setLoadingDelay(false)
  }, 5000)
  return <>
    <Button loading type='primary'>click me</Button>
    {/*<Button loading={loading} type='primary' onClick={() => setLoading(true)}>click me</Button>*/}
    <Button loading={loadingDelay} type='primary' onClick={() => setLoadingDelay({ delay: 1000 })}>click me</Button>
  </>
}
```
