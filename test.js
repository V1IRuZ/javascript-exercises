// Hello Object
let user = {};
user.name = "John";
user.surname = "Smith";
user["name"] = "Pete"
delete user.name;

for (let i in user) {
    alert(user[i]);
}

// Check for emptiness


function isEmpty(obj) {
   for (let key in obj) {
    return false
   }
   return true
}
    
  

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );


// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;

  for (let key in salaries) {
    sum += salaries[key];
  }

  alert(sum);

//   Multiply numeric property values by 2

function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof(obj[key]) != "number") {
                continue
        } else {
            obj[key] *= 2;
        }
    }
}     


// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  

for (let i in menu) {
    alert(i)
    alert (menu[i])
}
