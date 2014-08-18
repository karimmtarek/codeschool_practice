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

// var puzzlers = [func_1, func_2, func_3, func_4];

/**/

var parkRides = [
  ["Birch Bumpers", 40],
  ["Pines Plunge", 55],
  ["Cedar Coaster", 20],
  ["Ferris Wheel of First", 90]
];

var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

var userPick = "Birch Bumpers";

function buildTicket(allRides, passRides, pick){
  if(passRides[0] === pick){
    var pass = passRides.shift();
    return function () {
      alert("Quick! You've got a Fast Pass to " + pass + "!");
    };
  } else {
    for(var i = 0; i<allRides.length; i++){
      if(allRides[i][0] === pick){
        return function(){
          alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + allRides[i][1] + " minutes.");
        };
      }
    }
  }
}

var getTicket = buildTicket(parkRides, fastPassQueue, userPick);

/**/

function adventureSelector ( userChoice ){
  if(userChoice === 1){
    return function(){
      alert("You've selected the Vines of Doom!\nHope you have a swingin' time.");
    };
  } else if (userChoice === 2){
    return function(){
      alert("Looks like you want the Lake of Despair!\nWatch out for crocs. And I ain't talkin' about shoes.");
    };
  } else {
    return function(){
      alert("The Caves of Catastrophe, really?\nAlright, well....nice knowing you.");
    };
  }
}

/**/

var puzzlers = [
  function ( a ) { return 8*a - 10; },
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

var start = 2;
var puzzlersLength = puzzlers.length;


var applyAndEmpty = function( input, queue ) {

  var length = queue.length;
  for(var i = 0; i<length; i++){
    input = queue.shift()(input);
    console.log(input);
  }
  return input;
};

// alert(applyAndEmpty(2, puzzlers));
// alert(puzzlers[3](9));
// alert(puzzlers[1](3));
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
