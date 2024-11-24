// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Helpommin ymmärrettävä versio:
// function camelize(str) {
//     let words = str.split("-");
//     let mappedWords = words.map((word, index) => { 
//         if(index === 0) {
//             return word = word 
//         } else {
//             return word = word[0].toUpperCase() + word.slice(1);  
//         }

//     })
//     let result = mappedWords.join("");
//     return console.log(result)
// }


function camelize(str) {
    return str
    .split("-")
    .map((word, index) => {
        if(index === 0) {
            return word;
        }
        return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

let test = camelize("background-color");
console.log(test);

// Write a function filterRange(arr, a, b) that gets an array arr,
//  looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

array = [1, 2, 3, 4, 5, 6, 7, 8]

function filterRange(arr, a, b) {
    return arr.filter((num) => {
        if (num >= a && num <= b)
            return num
    })
}

let newArray = filterRange(array, 2, 6)
console.log(array);
console.log(newArray);

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes
//  from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace (arr, a, b) {
    for (let i = 0; i < arr.length; i++){
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

arrayTwo = [5, 3, 8, 1];
filterRangeInPlace(arrayTwo, 1, 4);
console.log(arrayTwo);

// Sort in decreasing order

let arraryThree = [5, 2, 1, -10, 8];


function sortArray (arr) {
   return arr.sort( (a,b) => (b - a) );
}

let testSorting = sortArray(arraryThree);
console.log(testSorting);

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arrayFour = ["HTML", "JavaScript", "CSS"];

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    return arr.toSorted();
}

let sorted = copySorted(arrayFour);
console.log(arrayFour);
console.log(sorted);

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// Solution:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((name) => name["name"] )

// console.log(names); 


// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// Solution:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((user) => ({
//     fullName: user.name + " " + user.surname,
//     id: user.id
// })
// )
// console.log(usersMapped);

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// Solution:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arraryFive = [ pete, john, mary ];

// function sortByAge() {
//     arraryFive.sort( (a, b) => a["age"] - b["age"] );
// }

// sortByAge(arraryFive);

// // now: [john, mary, pete]
// console.log(arraryFive[0].name); // John
// console.log(arraryFive[1].name); // Mary
// console.log(arraryFive[2].name); // Pete

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:


// Helpompi ratkaisu, muttei kovin luotettava, koska se palauttaa tietyt tulokset useammin:

// function shuffle(arr) {
//    return arr.sort((a,b) => 0.5 - Math.random());
// }

let arraySix = [1, 2, 3];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  

let shuffleTest = shuffle(arraySix);
console.log(shuffleTest);
// arr = [3, 2, 1]

shuffle(arraySix);
console.log(shuffleTest);
// arr = [2, 1, 3]

shuffle(arraySix);
console.log(shuffleTest);
// arr = [3, 1, 2]
// ...

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arraySeven = [ john, pete, mary ];

function getAverageAge(array) {
    return array.reduce((averageAge, user) => averageAge + user.age, 0) / array.length;
}

let avgAge = getAverageAge(arraySeven); // (25 + 30 + 29) / 3 = 28
console.log(avgAge);

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// Solution with filter and indexOf mehod:

// function unique(arr) {
//     return arr.filter((item, index, array) => array.indexOf(item) === index);
// }

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let unqs = unique(strings); // Hare, Krishna, :-O
console.log(unqs);

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

function groupById(arr) {
    return arr.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
      }, {})
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/