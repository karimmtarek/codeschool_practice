function sumOfCubes(a, b){

  var aCubed = a*a*a;
  var bCubed = b*b*b;
  var sum = aCubed + bCubed;

  return sum;
}

// console.log(sumOfCubes(3, 5));

function countE(){
  var phrase = prompt('Which phrase would you like to examin?');
  // alert(typeof(phrase));
  if(typeof(phrase) != "string"){
    alert('Thanks not a valid entry DUDE!');
    return false;
  } else {
    var eCount = 0;
    for (var index = 0; index < phrase.length; index++) {
      if(phrase.charAt(index) === 'e' || phrase.charAt(index) === 'E'){
        eCount++;
      }
    }
    alert("There are " + eCount + " E's in \"" + phrase + "\".");
    return true;
  }
}

countE();