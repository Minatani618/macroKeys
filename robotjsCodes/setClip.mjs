/* コマンドラインから呼び出されることを前提としている */
/* その際、node program名 文字列 のようにして引数を渡して呼ぶ */

import clipboardy from "clipboardy";

async function main() {
  // コマンドライン引数を取得する
  const text = process.argv[2];

  // クリップボードに書き込む
  await clipboardy.write(text);

  // クリップボードから読み込む
  const readText = await clipboardy.read();

  // 読み取った文字列を出力する
  console.log(readText);
}

main();
