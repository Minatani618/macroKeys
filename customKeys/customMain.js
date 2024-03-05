const fs = require("fs");
const path = require("path");
const robotjs = require("robotjs");
const customKeyNumber = Number(process.argv[2]);
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
  //対象のCSVファイル
  const macroCSV1FileName = "custom1.csv";
  const macroCSV2FileName = "custom2.csv";
  const macroCSV3FileName = "custom3.csv";

  //どのCSVファイルの情報を使用するかはコマンドライン引数で判断する
  let targetCSVPath;
  switch (customKeyNumber) {
    case 1:
      targetCSVPath = path.join(__dirname, macroCSV1FileName);
      break;
    case 2:
      targetCSVPath = path.join(__dirname, macroCSV2FileName);
      break;
    case 3:
      targetCSVPath = path.join(__dirname, macroCSV3FileName);
      break;
  }

  //csvファイルの中身を取得
  const csvContents = fs.readFileSync(targetCSVPath, "utf-8");
  const csvObjs = csv.parse(csvContents, { encoding: "utf-8", columns: true });

  //copy アクションで使用するプログラムのパスを設定
  const robotjsCodesPath = path.join(__dirname, "../", "robotjsCodes");
  const setClipPath = path.join(robotjsCodesPath, "setClip.mjs");
  const pastePath = path.join(robotjsCodesPath, "paste.js");

  //csvファイル行を順に処理して操作を実行
  for (csvObj of csvObjs) {
    //actionTypeごとに操作を実行
    switch (csvObj.actionType) {
      //文字列の入力(クリップボードに文字列追加→ペーストで対応)
      case "copy":
        //クリップボード操作がnode.jsライブラリで実現できなかったためmjsを実行する形で実装
        execSync(`node ${setClipPath} ${csvObj.copyStrings}`);
        execSync(`node ${pastePath}`);
        break;
      //待機
      case "sleep":
        await sleep(csvObj.sleepTime);
        break;
      //キーの押下
      case "tap":
        robotjs.keyTap(csvObj.typeKeys);
        break;
    }
  }
};

main();
