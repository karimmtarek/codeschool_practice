var runAway = function(){
  var toAlert = "";
  for(var i = 0; i<5; i++){
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};

// runAway();

/**/

var people = 1;
var rain = 55;
var sharks = 7;
var fearMessage;

function fearFunc(){
  var fearGenerated = function ( numPeeps, rainInInches, numSharks){
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    var totalFear = sharkFear + rainFear;
    return totalFear;
  };

  var fear = fearGenerated(people, rain, sharks);
  console.log(fear, " ",typeof(fear));

  if (fear < 200){
    fearMessage = "Fear Level: LOW\n" + "Should be no problem at all...mwahaha.\n" + "Still wanna ride?";
    console.log(fearMessage);

  } else if (fear <= 300){
    fearMessage = "Fear Level: MEDIUM\n" + "You may want to rethink this one. MWAHAHA!\n" + "Think you'll make it?";
    console.log(fearMessage);
  } else if (fear <= 400) {
    fearMessage = "Fear Level: HIGH\n" + "ABANDON ALL HOPE!!\n" + "Have a death wish?";
    console.log(fearMessage);
  }
}
// fearFunc();

/**/

var passengers = [
                    ["Thomas", "Meeks"],
                    ["Gregg", "Pollack"],
                    ["Christine", "Wong"],
                    ["Dan", "McGaw"]
                  ];
function usingArrMap(){
  var modifiedNames = passengers.map(function(fullName) {
    return fullName.join(' ');
  });

  console.log(modifiedNames);

  console.log(
    modifiedNames.map(function(name) {
      return "Yo, " + name + "!";
    })
  );
}
// usingArrMap();

/**/
var func_1 = function(num){
  return num * 3 - 8;
};

var func_2 = function(num){
  var sum = num + 2;
  return sum * sum * sum;
};

var func_3 = function(num){
  return num * num - 9;
};

var func_4 = function(num){
  return num % 4;
};

var puzzlers = [func_1, func_2, func_3, func_4];

