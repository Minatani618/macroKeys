/* edtliblの最後に使用 */
const robot = require("robotjs");

//待機関数
const sleep = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

//自動入力関数 引数に入力内容を記入する
const main = async () => {
  await sleep(0.1);
  robot.keyTap("right_control");
  await sleep(0.2);
  robot.keyTap("tab");
};

main();
