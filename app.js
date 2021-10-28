//1

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log ('Today is Sunday');
      break;
    case 1:
      day = "Monday";
      console.log ('Today is Monday');
      break;
    case 2:
       day = "Tuesday";
       console.log ('Today is Tuesday');
      break;
    case 3:
      day = "Wednesday";
      console.log ('Today is Wednesday');
      break;
    case 4:
      day = "Thursday";
      console.log ('Today is Thursday');
      break;
    case 5:
      day = "Friday";
      console.log ('Today is Friday');
      break;
    case 6:
      day = "Saturday";
      console.log ('Today is Saturday');
  }

 //2

 for (let i = 0; i < 100; i++) {
     console.log (i);
 }

 //3

 let i = 0;
 while (i<50) {
     console.log (i);
     i++;
 }

 //4

 let num = 0;
 do {
     num++;
     console.log (num);
 }
 while (num<150);

//5

let numberArray = [];
for (let i = 0; i<10000; i++) {
    numberArray.push (i*i)
}
console.log (numberArray);
 
//6

const points = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
points.sort(function(a, b){return b-a});
console.log (points[1]);