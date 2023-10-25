//Problem 1: Write a function to calculate the area of a triangle.

function triangleArea(base,height){
    area= ( base*height)/2;
    console.log(area)
}
triangleArea(5,10)

//Problem 2: Write a function to convert degrees to radians.

function degreeToRadians(degree){
  var pi = 3.1416;
  var radians = degree*(pi/180);
  console.log(radians);
}
degreeToRadians(8)

//Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(num) {
    if (num == 0 && num==1){
        return 1;
    } 
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
      
}
calculateFactorial(3);


  