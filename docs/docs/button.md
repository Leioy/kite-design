# Button 按钮

## 实心按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';

export default () => (
  <>
    <Button>DEFAULT</Button>
    <Button color="primary">
      PRIMARY
    </Button>
    <Button color="secondary">
      SECONDARY
    </Button>
    <Button color="success">
      SUCCESS
    </Button>
    <Button color="warning">
      WARNING
    </Button>
    <Button color="danger">
      DANGER
    </Button>
    <Button color="primary" disabled>
      DISABLED
    </Button>
  </>
);
```

## 描边按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';

export default () => (
  <>
    <Button variant="outlined">
      DEFAULT
    </Button>
    <Button variant="outlined" color="primary">
      PRIMARY
    </Button>
    <Button variant="outlined" color="secondary">
      SECONDARY
    </Button>
    <Button variant="outlined" color="success">
      SUCCESS
    </Button>
    <Button variant="outlined" color="warning">
      WARNING
    </Button>
    <Button variant="outlined" color="danger">
      DAGNER
    </Button>
    <Button color="primary" variant="outlined" disabled>
      DISABLED
    </Button>
  </>
);
```

## 文本按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';
import { Alipay } from '@kite-design/icons-react';

export default () => (
  <>
    <Button variant="text">
      DEFAULT
    </Button>
    <Button

      variant="text"
      color="primary"
      icon={<Alipay />}
    >
      PRIMARY
    </Button>
    <Button variant="text" color="secondary">
      SECONDARY
    </Button>
    <Button variant="text" color="success">
      SUCCESS
    </Button>
    <Button variant="text" color="warning">
      WARNING
    </Button>
    <Button variant="text" color="danger">
      DAGNER
    </Button>
    <Button color="primary" variant="text" disabled>
      DISABLED
    </Button>
  </>
);
```

## 按钮大小

```jsx
import React from 'react';
import { Button } from 'kite-design';

export default () => (
  <>
    <Button size="small" color="primary">
      SMALL
    </Button>
    <Button color="primary">
      MiDDLE
    </Button>
    <Button size="large" color="primary">
      LARGE
    </Button>
  </>
);
```

## 按钮形状-圆形按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';
import { Apple } from '@kite-design/icons-react';

export default () => (
  <>
    <Button

      shape="circle"
      color="primary"
      icon={<Apple />}
    />
    <Button

      shape="circle"
      color="secondary"
      size="small"
      icon={<Apple />}
    />
    <Button

      shape="circle"
      color="success"
      size="large"
      icon={<Apple />}
    />
    <Button

      shape="circle"
      color="warning"
      size="large"
      icon={<Apple />}
    />
    <Button

      shape="circle"
      color="danger"
      size="large"
      icon={<Apple />}
    />
  </>
);
```

## 按钮形状-圆角按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';

export default () => (
  <>
    <Button variant="outlined" shape="round">
      DEFAULT
    </Button>
    <Button

      variant="outlined"
      shape="round"
      color="primary"
    >
      PRIMARY
    </Button>
    <Button

      variant="outlined"
      shape="round"
      color="secondary"
    >
      SECONDARY
    </Button>
    <Button

      variant="outlined"
      shape="round"
      color="success"
    >
      SUCCESS
    </Button>
    <Button

      variant="outlined"
      shape="round"
      color="warning"
    >
      WARNING
    </Button>
    <Button

      variant="outlined"
      shape="round"
      color="danger"
    >
      DAGNER
    </Button>
  </>
);
```

## 图标按钮

```jsx
import React, { useState } from 'react';
import { Button } from 'kite-design';
import { Alipay, Loading } from '@kite-design/icons-react';

export default () => {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 6000);
  return (
    <>
      <Button

        icon={<Alipay />}
        loading={loading}
        onClick={e => {
          console.log('click', e);
          setLoading(true);
        }}
      >
        编辑
      </Button>
      <Button icon={<Loading />}></Button>
    </>
  );
};
```

## 加载中

```tsx
import React, { useState } from 'react';
import { Button } from 'kite-design';

export default () => {
  const [ loadingDelay, setLoadingDelay ] = useState<boolean | { delay: number }>(false);
  setTimeout(() => {
    setLoadingDelay(false);
  }, 5000);
  return (
    <>
      <Button loading color="primary">click me</Button>
      <Button loading={loadingDelay} color="primary" onClick={() => setLoadingDelay({ delay: 1000 })}>
        click me
      </Button>
    </>
  );
};
```

## API

### Button
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 设置按钮颜色 | `primary \| secondary \| success \| warning \| danger \| default` | default |
| variant | 设置按钮类型 | `contained \| outlined \| text` | contained |
| size | 设置按钮大小 | `small \| large` | - |
| shape | 设置按钮形状 | `circle \| round` | - |
| icon | 设置按钮的图标 | `ReactNode` | - |
| loading | 设置按钮载入状态 | `boolean \| { delay: number }` | false |
| disabled | 按钮失效状态 | `boolean` | false |
| onClick | 点击按钮时的回调	 | `(event) => void` | - |
