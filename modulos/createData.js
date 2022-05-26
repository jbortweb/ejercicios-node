const fs = require('fs');
const data = JSON.stringify(process, null ,2);
fs.writeFileSync('data.json',data);

const dataRead = fs.readFileSync('./data.json', 'utf-8');
console.log(typeof dataRead);
const dataObj = JSON.parse(dataRead);
console.log(dataObj.versions.node);