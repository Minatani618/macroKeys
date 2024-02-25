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
  //
  robot.keyTap("f4");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("2");
  robot.keyTap("4");
  robot.keyTap("0");
  robot.keyTap("1");
  robot.keyTap("0");
  robot.keyTap("1");
  robot.keyTap("enter");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("f4");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("f4");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("down");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("f4");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("f4");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("f4");
  robot.keyTap("right_control");
  robot.keyTap("right_control");
  //
  robot.keyTap("f4");
  robot.keyTap("right_control");
};

main();
