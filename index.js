const _ = require('lodash');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quantos bits terá seu somador? ', (bits) => {
  rl.close();
  var anterior = "c0";
  for (var i = 0; i < bits; i++) {
    process.stdout.write("\nc"+(parseFloat(i)+1)+" = ");
    var array = anterior.split(" + ");
    for (var j = 0; j < array.length; j++)
      array[j] = "p"+i+array[j];
    var arrayAtual = Array();
    arrayAtual.push("g"+i);
    arrayAtual.push(array);
    arrayAtual = _.flattenDeep(arrayAtual);
    var string = arrayAtual.join(" + ");
    var anterior = string;
    console.log(string+'\n');
  }
});
