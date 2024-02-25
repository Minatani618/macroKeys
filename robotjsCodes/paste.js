/* クリップボードに貼ってある文字列をコントロールVで貼り付けるだけのプログラム */
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
  //クリップボード保存
  await sleep(0.05);

  //貼り付け
  robot.keyToggle("control", "down");
  robot.keyTap("v");
  robot.keyToggle("control", "up");
};

main();
