var num = 10;

// only print even numbers
function onlyEven(){
  while(num>0){
    if (num%2 === 0)  {
      console.log(num);
    } else {
      console.log('Sorry bud, it"s odd!');
    }
    num--;
  }
}
// onlyEven();


function tmp(){

  var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber%4 === 0){
    numSheep /= 4;
    console.log("Removing " + numSheep*3 + " sheep from the population. Phew!");
  } else if(numSheep > 10000) {
    numSheep /= 2;
    console.log("Removing " + numSheep + " sheep from the population. Phew!");
  }

  // <second conditional goes here>

  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

}
tmp();

// xxx = 25;
// console.log(xxx /= 4);
