const fs = require('fs');
const path = require('path');

// We need compile additional content for antd user
function finalizeCompile () {

  const componentsPath = path.join(process.cwd(), 'src');
  let componentsLessContent = '';
  // Build components in one file: lib/style/components.less
  fs.readdir(componentsPath, (err, files) => {
    files.forEach(file => {
      console.log(file);
      if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
        componentsLessContent += `@import "../../src/${path.join(file, 'style', 'index.less')}";\n`.replace(/\\/g, '/');
      }
    });
    console.log(componentsLessContent);
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'style', 'components.less'),
      componentsLessContent,
    );
  });
}

function finalizeDist () {
  if (fs.existsSync(path.join(__dirname, './dist'))) {
    // Build less entry file: dist/antdv.less
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'app.less'),
      '@import "../src/style/index.less";\n@import "./style/components.less";',
    );

    // eslint-disable-next-line
    console.log('Built a entry less file to dist/app.less');
  }
}

function finalizeCss () {
  if (fs.existsSync(path.join(__dirname, './dist/app.less')) && !fs.existsSync(path.join(__dirname, './dist/app.css'))) {
    // Build less entry file: dist/antdv.less
    fs.writeFileSync(
      path.join(process.cwd(), 'dist', 'css.js'),
      'import "./app.less";',
    );

    // eslint-disable-next-line
    console.log('Built a entry js file to dist/css.js');
  }
}

function clearDistUseless () {
  function deleteAll (url) {
    // eslint-disable-next-line
    console.log('delete useless file:', url);
    if (fs.existsSync(url)) {
      if (fs.statSync(url).isDirectory()) {
        // 文件及子目录数组
        const files = fs.readdirSync(url);
        files.forEach((file) => {
          const curPath = path.join(url, file);
          // 文件夹，递归
          if (fs.statSync(curPath).isDirectory()) {
            deleteAll(curPath);
          } else {
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(url);
      } else {
        fs.unlinkSync(url);
      }
    }
  }

  function resolveFile (filePath) {
    return path.join(__dirname, 'dist', filePath);
  }

  deleteAll(resolveFile('src'));
  deleteAll(resolveFile('css.js'));
  deleteAll(resolveFile('css.bundle.js'));
}

const isClear = process.argv.indexOf('clear') !== -1;
// eslint-disable-next-line
console.log('isClear-------->', isClear);
if (isClear) {
  clearDistUseless();
} else {
  finalizeCompile();
  finalizeDist();
  finalizeCss();
}
