const tools = require('./tools');

//const strToManipulate = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const strToManipulate = process.argv[2];

const capital = tools.capitalizeEach(strToManipulate);
const reversing = tools.reverseStr(capital);

console.log(capital);
console.log(reversing);

