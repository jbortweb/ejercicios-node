const fs = require('fs');
const upda = JSON.stringify(process,null,2);
fs.writeFileSync('updateVersion.json',upda);

const updaRead = fs.readFileSync('./updateVersion.json', 'utf-8');
console.log(typeof updaRead);
const updaObj = JSON.parse(updaRead);
console.log(updaObj.version);
updaObjMasUno = (updaObj.version +1);
console.log(updaObjMasUno);
