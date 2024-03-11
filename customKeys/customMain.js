const fs = require("fs");
const path = require("path");
const robotjs = require("robotjs");
const customKeyNumber = process.argv[2]; //コマンドライン引数は数字の1~9で入ってくる想定
const csv = require("csv-parse/sync");
const { exec, execSync } = require("child_process");

//待機関数
const sleep = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

//処理のメイン関数
const main = async () => {
  //対象のCSVファイル コマンドライン引数により変化
  const macroCSVFileName = `custom${customKeyNumber}.csv`;
  const targetCSVPath = path.join(__dirname, macroCSVFileName);

  //csvファイルの中身を取得
  const csvContents = fs.readFileSync(targetCSVPath, "utf-8");
  const csvObjs = csv.parse(csvContents, { encoding: "utf-8", columns: true });

  //copy アクションで使用するプログラムのパスを設定
  const robotjsCodesPath = path.join(__dirname, "../", "robotjsCodes");
  const setClipPath = path.join(robotjsCodesPath, "setClip.mjs");
  const pastePath = path.join(robotjsCodesPath, "paste.js");

  //csvファイル行を順に処理して操作を実行
  for (csvObj of csvObjs) {
    //待機
    if (csvObj.sleepTime) {
      await sleep(csvObj.sleepTime);
      continue;
    }

    //文字列挿入
    if (csvObj.copyStrings) {
      //クリップボード操作がnode.jsライブラリで実現できなかったためmjsを実行する形で実装
      execSync(`node ${setClipPath} ${csvObj.copyStrings}`);
      execSync(`node ${pastePath}`);
      continue;
    }

    //キー押下
    if (csvObj.typeKeys) {
      robotjs.keyTap(csvObj.typeKeys);
      continue;
    }
  }
};

main();
