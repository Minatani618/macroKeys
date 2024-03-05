const { exec } = require("child_process");

const main = async () => {
  await ex();
  console.log("inu");
};

const ex = () => {
  exec(
    "node C:\\Users\\ec000376\\Documents\\macroKeys\\nodejsKicker\\test.js",
    function (error, stdout, stderr) {
      console.log(stdout);
    }
  );
  console.log("as");
  return new Promise((resolve, reject) => {
    resolve();
  });
};

main();
