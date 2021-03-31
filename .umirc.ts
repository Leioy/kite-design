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
        title: '通用',
        children: [
          '/docs/button',
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
  resolve: {
    include: [ './docs' ],
  },
  menus: {
    '/docs': getMenus(),
  },
  navs: [
    null,
    {
      title: '百度',
      path: 'https://baidu.com',
    },
  ],
  // more config: https://d.umijs.org/config
});
