//operator procedence
var massMark = 78;
var heightMark = 2;

var massJohn = 90;
var heightJohn = 6;

var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

//var totalBMI = BMIMark >= BMIJohn
//console.log('is mark\'s BMI creater than john\'s BMI? ' + totalBMI)

//if else statement

if (BMIMark > BMIJohn) {
  console.log("BMIMark is greater than BMIJohn");
} else {
  console.log("not really");
}

//ternary operator

var firstName = "light ";
var myAge = 12;

//myAge >= 18 ? console.log(firstName + 'drinks beer')
//: console.log(firstName + 'drinks juice')

//switch statement

var job = "footballer";
switch (job) {
  case "singer":
    console.log(firstName + "sing's a melodious song");
    break;
  case "driver":
    console.log(firstName + "drives truck");
    break;
  case "footballer":
    console.log(firstName + "can dribble very well");
    break;
  case "designer":
    console.log(firstName + "design's a photograph");
    break;
  default:
    console.log(firstName + "stays at home");
}
switch (true) {
  case myAge >= 18:
    console.log(firstName + "drinks beer");
    break;
  case myAge < 18:
    console.log(firstName + "drinks juice");
}

//coding challenge

var johnTotal = (89 + 120 + 103) / 3;
console.log(johnTotal);
var mikeTotal = (119 + 94 + 123) / 3;
console.log(mikeTotal);
var maryTotal = (97 + 134 + 105) / 3;
console.log(maryTotal);

switch (true) {
  case johnTotal > mikeTotal:
    console.log("john's team won with the average of " + johnTotal);
    break;
  case johnTotal < mikeTotal:
    console.log("mike's team won with the average of " + mikeTotal);
    break;
  default:
    console.log("they had a draw game");
}
if (johnTotal > mikeTotal && johnTotal > maryTotal) {
  console.log("john's team won with the average of " + johnTotal + " point");
} else if (maryTotal > mikeTotal && maryTotal > johnTotal) {
  console.log("mary's team won with the average of " + mikeTotal + " point");
} else if (mikeTotal > johnTotal && mikeTotal > johnTotal) {
  console.log("mary's team won with the average of " + maryTotal + " point");
} else {
  console.log("they played draw");
}

// Array push method

var light = ["light", "samuel", 2002, "photographer", "engineer"];
light.push(false); //add element to the array at the end
light.unshift("Mr"); //add element to array at the begin
console.log(light);
console.log(light.length);

light.pop(); //remove element to the array at the end
light.shift(); //remove element to array at the begin
console.log(light);

console.log(light.indexOf(2002));

var isPhotographer =
  light.indexOf("photographer") === -1
    ? "light is not photographer"
    : "light is a photographer";
console.log(isPhotographer);

//coding challenge
function tipCalculator(familyBills) {
  var percentage;
  switch (true) {
    case familyBills < 50:
      percentage = 0.2;
      break;
    case familyBills >= 50 && familyBills <= 200:
      percentage = 0.15;
      break;
    default:
      percentage = 0.1;
  }
  return percentage * familyBills;
}
console.log(tipCalculator(10));

var familyBills = [124, 48, 268];
var tips = [
  tipCalculator(familyBills[0]),
  tipCalculator(familyBills[1]),
  tipCalculator(familyBills[2]),
];
var finalValues = [familyBills[0] + tips[0],
                   familyBills[1] + tips[1],
                   familyBills[2] + tips[2]]

console.log(tips, finalValues)

//object and proprties

var light = {
    firstName: 'light',
    lastName: 'samuel',
    birthYear: 1996,
    job: 'designer',
    isMarried: false,
    family: ['marv', 'melody', 'sucess', 'delling']
};
console.log(light.birthYear);
console.log(firstName);
var x = 'job'
console.log(light[x])

light.job = 'teacher'
light['isMarried'] = true
console.log(light)

//object and method
var light = {
    firstName: 'light',
    lastName: 'samuel',
    birthYear: 1996,
    job: 'designer',
    isMarried: false,
    family: ['marv', 'melody', 'sucess', 'delling'],
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};
light.calcAge(),
console.log(light)


//coding challenge

var mark = {
    height: 2,
    mass: 78,
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height )
        return this.bmi
    }
}
var john = {
    height: 6,
    mass: 90,
    calBMI: function() {
        this.bmi = this.mass / (this.height * this.height )
        return this.bmi ;
    }
    
}
mark.calBMI()
john.calBMI()
console.log(mark, john)

//loop
//for loop

var light =  ['marv', 'melody', 2000, 'delling'];
for (var i = 0; i < light.length; i++) {
    console.log(light[i]);
}

//while loop
var i = 0;
while(i < light.length) {
  console.log(light[i]);
  i++;
}


//continue and break statement

var light =  ['marv', 'melody', 2000, 'delling'];
for (var i = 0; i < light.length; i++) {
    if (typeof light[i] !== 'string') continue;
    console.log(light[i]);
}

for (var i = 0; i < light.length; i++) {
    if (typeof light[i] !== 'string') break;
    console.log(light[i]);
}

//looping backward

for (var i = light.length - 1; i >= 0; i--) {
  console.log(light[i]);
}
/*var message =  document.getElementsByClassName('message')[0];
var text = document.getElementsByClassName('text')[0];
var buttonSe = document.getElementsByClassName('button')[0];

buttonSe.addEventListener('click', function (){
  var newMessage = document.createElement('li');
  newMessage.innerHTML = text.value;
  message.appendChild(newMessage);
  text.value = "";
});*/


//coding challenge
var age = 23;
var John = {
  firstName: 'john',
  age: 33,
  bills: [124, 48, 268, 180, 42]

}

function change(a,b) {
  a.age= 66;
  b.firstName = 'mark';
}
change(age,john)

console.log(age)
console.log(john.firstName)

//function as agrument 
var years = [2002, 2000, 1999, 2003];

function arrycal(arr, fn) {
    var arrRes = [];
    for( var i = 0; i < arr.length; i++){
      arrRes.push(fn(arr[i]))
    }
    return arrRes
}
function calcarr(el) {
 return 2021 - el;
}
var ages = arrycal(years, calcarr)
console.log(ages)




