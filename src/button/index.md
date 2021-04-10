---
title: button
nav:
  path: /docs
group:
  title: 通用
  path: /components
--- 
# Button

## 实心按钮

```jsx
import React from 'react';
import { Button } from 'kite-design';

export default () => (
  <>
    <Button style={{ marginRight: '8px' }}>DEFAULT</Button>
    <Button style={{ marginRight: '8px' }} color="primary">
      PRIMARY
    </Button>
    <Button style={{ marginRight: '8px' }} color="secondary">
      SECONDARY
    </Button>
    <Button style={{ marginRight: '8px' }} color="success">
      SUCCESS
    </Button>
    <Button style={{ marginRight: '8px' }} color="warning">
      WARNING
    </Button>
    <Button style={{ marginRight: '8px' }} color="danger">
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
    <Button style={{ marginRight: '8px' }} variant="outlined">
      DEFAULT
    </Button>
    <Button style={{ marginRight: '8px' }} variant="outlined" color="primary">
      PRIMARY
    </Button>
    <Button style={{ marginRight: '8px' }} variant="outlined" color="secondary">
      SECONDARY
    </Button>
    <Button style={{ marginRight: '8px' }} variant="outlined" color="success">
      SUCCESS
    </Button>
    <Button style={{ marginRight: '8px' }} variant="outlined" color="warning">
      WARNING
    </Button>
    <Button style={{ marginRight: '8px' }} variant="outlined" color="danger">
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
    <Button style={{ marginRight: '8px' }} variant="text">
      DEFAULT
    </Button>
    <Button
      style={{ marginRight: '8px' }}
      variant="text"
      color="primary"
      icon={<Alipay />}
    >
      PRIMARY
    </Button>
    <Button style={{ marginRight: '8px' }} variant="text" color="secondary">
      SECONDARY
    </Button>
    <Button style={{ marginRight: '8px' }} variant="text" color="success">
      SUCCESS
    </Button>
    <Button style={{ marginRight: '8px' }} variant="text" color="warning">
      WARNING
    </Button>
    <Button style={{ marginRight: '8px' }} variant="text" color="danger">
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
    <Button style={{ marginRight: '8px' }} size="small" color="primary">
      SMALL
    </Button>
    <Button style={{ marginRight: '8px' }} color="primary">
      MiDDLE
    </Button>
    <Button style={{ marginRight: '8px' }} size="large" color="primary">
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
      style={{ marginRight: '8px' }}
      shape="circle"
      color="primary"
      icon={<Apple />}
    />
    <Button
      style={{ marginRight: '8px' }}
      shape="circle"
      color="secondary"
      size="small"
      icon={<Apple />}
    />
    <Button
      style={{ marginRight: '8px' }}
      shape="circle"
      color="success"
      size="large"
      icon={<Apple />}
    />
    <Button
      style={{ marginRight: '8px' }}
      shape="circle"
      color="warning"
      size="large"
      icon={<Apple />}
    />
    <Button
      style={{ marginRight: '8px' }}
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
    <Button style={{ marginRight: '8px' }} variant="outlined" shape="round">
      DEFAULT
    </Button>
    <Button
      style={{ marginRight: '8px' }}
      variant="outlined"
      shape="round"
      color="primary"
    >
      PRIMARY
    </Button>
    <Button
      style={{ marginRight: '8px' }}
      variant="outlined"
      shape="round"
      color="secondary"
    >
      SECONDARY
    </Button>
    <Button
      style={{ marginRight: '8px' }}
      variant="outlined"
      shape="round"
      color="success"
    >
      SUCCESS
    </Button>
    <Button
      style={{ marginRight: '8px' }}
      variant="outlined"
      shape="round"
      color="warning"
    >
      WARNING
    </Button>
    <Button
      style={{ marginRight: '8px' }}
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
        style={{ marginRight: '8px' }}
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

```jsx
import React, { useState } from 'react';
import { Button } from 'kite-design';

export default () => {
  const [loadingDelay, setLoadingDelay] = useState(false);
  setTimeout(() => {
    setLoadingDelay(false);
  }, 5000);
  return (
    <>
      <Button style={{ marginRight: '8px' }} loading color="primary">
        click me
      </Button>
      <Button
        loading={loadingDelay}
        color="primary"
        onClick={() => setLoadingDelay({ delay: 1000 })}
      >
        click me
      </Button>
    </>
  );
};
```

