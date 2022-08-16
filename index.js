// 1 

const numbers = [5,1,2,3,10]

function doubleValues() { 
    const doubles = numbers.map(item => item * 2)
    console.log("Q1 -->", doubles)
}

doubleValues()


console.log("----------------------------")

// 2 

function onlyEvenValues () {

    const even = numbers.filter(number => {
        return number % 2 === 0;
    })

    console.log("Q2 -->", even)
}

onlyEvenValues() 


console.log("----------------------------"); 

// 3

function showFirstAndLast (arr) {
    var newArr = [];
    arr.forEach(function(item) {
        newArr.push(item[0] + item[item.length -1])
    }); 

    return newArr;
    console.log("Q3 -->", newArr);
}

showFirstAndLast(['colt','matt', 'tim', 'udemy']);
showFirstAndLast(['hi', 'goodbye', 'smile']);

console.log("----------------------------")

// 4

function addKeyAndValue(arr, key, value) {
    
    arr.forEach(function(item) {
        
        item[key] = value;
    });

    return arr; 
    console.log('Q4 -->', item)

}
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

console.log("----------------------------")

// 5

