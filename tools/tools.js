const capitalizeEach = (str) => {
    let splitStr = str.split(' ');
    let upperFirst = splitStr.map((splitStr)=>{
        return splitStr.charAt(0).toUpperCase() + splitStr.slice(1);
    })

    return upperFirst.join(' ');
}

const reverseStr = (str) => {
    let splitStr = str.split(' ');
    return splitStr.reverse().join(' ');
}


module.exports = {
    capitalizeEach,
    reverseStr
}