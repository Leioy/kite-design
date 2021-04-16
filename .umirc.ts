import { defineConfig } from 'dumi';

function getMenus (base = '/docs') {
  const menus: any = {
    '/docs': [
      {
        title: '介绍',
        children: [
          '/docs/README',
          '/docs/getting-started',
        ],
      },
      {
        title: '组件',
        children: [
          '/docs/icon',
          '/docs/button',
          '/docs/layout',
          '/docs/grid',
          '/docs/switch',
          '/docs/radio',
          '/docs/checkbox'
        ],
      },
    ],
  };
  return (menus[base]);
}
export default defineConfig({
  title: 'kite-design',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  menus: {
    '/docs':getMenus()
  },
  navs: [
    {
      title:"文档",
      path:'/docs'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Leioy/kite-design',
    },
  ],
  // more config: https://d.umijs.org/config
});
