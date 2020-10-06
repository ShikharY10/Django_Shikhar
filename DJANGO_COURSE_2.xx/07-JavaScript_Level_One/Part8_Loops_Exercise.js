/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop
console.log("--------------PROBLEM 1--------------------");
// While Loop
var x=1;
while (x<6) {
  console.log("Hello!!");
  x++;
}
console.log("--------------PROBLEM 1--------------------");
// For Loop
for (var i = 0; i < 5; i++) {
  console.log("Hello!!");
}
console.log("----------------PROBLEM 2------------------");


/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var num=1;
while (num<26) {
  if (num%2!==0) {
    console.log(`${num} is Odd!!`);
  }
  num++;
}
console.log("-------------PROBLEM 2---------------------");
// METHOD TWO
// For Loop
for (var i = 1; i < 26; i++) {
  if (i%2!==0) {
    console.log(`${i} is Odd!!`);
  }
}
