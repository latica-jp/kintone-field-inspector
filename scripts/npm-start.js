'use strict';
const runAll = require('npm-run-all');

runAll(['develop -- --watch', 'upload -- --watch'], {
  // upload を develop のあとではなく parallel で起動する理由：
  // upload は watch モードでプラグインファイルの（再）生成を監視するため、
  // 少なくとも develop の終了前に開始されている必要がある
  parallel: true,
  stdout: process.stdout,
  stdin: process.stdin,
}).catch(error => {
  const { results } = error;
  if (results) {
    results
      .filter(({ code }) => code)
      .forEach(({ name }) => {
        console.error(`"npm run ${name}" failed!`);
      });
  } else {
    console.error(error);
  }
  process.exit(1);
});
