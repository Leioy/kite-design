# Layout 布局

## 代码演示

<code src="../demo/layout-demo.tsx"></code>

## API

### Layout

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器的className | `string` | - |
| style | 指定样式 | `CSSProperties` | - |

### Layout.Sider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 容器宽度 | `string \| number` | - |
| style | 指定样式 | `CSSProperties` | - |
| breakpoint | 触发响应式布局的断点 | `xs \| sm \| md \| lg \| xl \| xxl` | - |
| onBreakpoint | 触发响应式布局断点时的回调 | `(broken:boolean) => void` | - |

### breakpoint width

```
{
  xs: '480px', 
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
```

