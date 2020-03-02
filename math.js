function sum(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    } else {
        return "You must provide 2 numerical values"
    }
}

function sub(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a - b
    } else {
        return "You must provide 2 numerical values"
    }
}

module.exports = {
    sum: sum,
    sub: sub
}