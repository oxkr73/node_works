const fs = require('fs')
const info = require('./os')

const infoText = `
CPUS => ${JSON.stringify(info.osData.cpus)}
SYSTEM => ${JSON.stringify(info.osData.system)}
SERVER => ${JSON.stringify(info.osData.server)}
`;

fs.writeFile('infoText.txt',infoText, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
