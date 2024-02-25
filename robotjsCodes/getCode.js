/* FTP接続してRPGのソースコードを取得する自動化 */
/* 別で用意したbatファイルから起動する想定 */

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
  //コマンドプロンプト起動待ち（別のバッチファイルが開く想定のため）
  sleep(1);

  //GAC開発環境にログイン
  robot.typeString("GC000001");
  robot.keyTap("enter");
  robot.typeString("DES@1101");
  robot.keyTap("enter");

  //FTPサーバー接続待ち
  sleep(1.5);

  //文字タイプ設定
  robot.typeString("quote type B 1");
  robot.keyTap("enter");
  sleep(1);
};

main();
