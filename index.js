var exec = require('child_process').exec;

function generate(projName) {
  exec(`mkdir ${projName} && cd ${projName} && node ../RNProjectGenerator/main.js ${projName}`);
}

generate(process.argv[2]);
