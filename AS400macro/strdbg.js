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
  //貼り付け strdbgコマンドの後半を貼り付け
  robot.keyToggle("control", "down");
  robot.keyTap("v");
  robot.keyToggle("control", "up");

  //先頭に戻る
  robot.keyTap("tab");

  //先頭にstrdbgコマンドの前半を貼るスペースを確保
  robot.keyTap("insert");
};

main();
