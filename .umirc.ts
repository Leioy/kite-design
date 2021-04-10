import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'kite-design',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null,
    {
      title: '百度',
      path: 'https://baidu.com',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'kite-design',
        libraryDirectory: "lib",
        customStyleName: () => {
          return `./style/index.less`; // 注意：这里 ./ 不可省略
        },
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
