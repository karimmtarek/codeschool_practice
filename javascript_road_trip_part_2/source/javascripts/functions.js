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
    alert("That's not a valid entry DUDE!");
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

// countE();

// curSheepPop: current population of sheep
// avaRan: amount of park rangers available during the day
function feedPerRanger (curSheepPop, avaRan) {
  // sheep needs 2 lbs of food per day
  // var curSheepPop = prompt("What's the current population of sheep?");
  // var avaRan = prompt("What's the amount of park rangers available today?")
  var foodNeeded = (curSheepPop*2) / avaRan;
  alert("Each Park Ranger should load " + foodNeeded + "lb(s) of feed into his/her BART today.");

}

// feedPerRanger (100000, 100);

function changePowerTotal(totalCurrentPowerGenerated, generatorID, generatorNewStatus, powerGenerated){
  if (generatorNewStatus === "on"){
    totalCurrentPowerGenerated += powerGenerated;
    alert("Generator #" + generatorID + " is now on, adding " + powerGenerated + " MW, for a total of " + totalCurrentPowerGenerated + " MW!");
    return totalCurrentPowerGenerated;
  } else {
    totalCurrentPowerGenerated -= powerGenerated;
    alert("Generator #" + generatorID + " is now off, removing " + powerGenerated + " MW, for a total of " + totalCurrentPowerGenerated + " MW!");
    return totalCurrentPowerGenerated;
  }
}

changePowerTotal(200, 5, "off", 50);