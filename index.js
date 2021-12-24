// Your code here
function saturdayFun(gift = "roller-skate") {
    return `This Saturday, I want to ${gift}!`;
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(param = "*") {
   return function(element = "special" ) {
    return `You are ${param}${element}${param}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(start, array) {
    for(let i=0; i<array.length; i++) {
        start = array[i](start);
    }
    return start
}