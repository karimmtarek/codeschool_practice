var listOfThings = ['Karim', 0, true, [0, 1, 2], {'what': 'nothing'}, function(){}, null, undefined] ;

function getIndexType(){
  for (var i = listOfThings.length - 1; i >= 0; i--) {
    console.log('Type of ', listOfThings[i], 'is: ', typeof(listOfThings[i]));
  }
}
// getIndexType();

var listOfNums = [5,6,9,8,12,23,11,10,2,1];
var evenNumCount = 0;
function countEven(){
  for (var i = 0; i < listOfNums.length; i++) {
    if(listOfNums[i]%2 === 0){
      evenNumCount++;
      console.log(evenNumCount);
    } else {
      listOfNums[i] = undefined;
    }
  }
}
// countEven();
var listX = [];
function addName(name, list){
  if (list.length === 0 ){
    list.push(name);
    return list;
  } else {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === undefined){
        list[i] = name;
        return list;
      } else if (i === list.length - 1){
        list.push(name);
        return list;
      }
    }
  }
}

function deleteName(name, list){
  if (list.length === 0){
    // console.log("List is empty");
    return "List is empty";
  } else {
    for (var i = 0; i < list.length; i++) {
      if(list[i] === name){
        list[i] = undefined;
        return list;
      } else if ( i === list.length - 1) {
        return "Name not found";
      }
    }
  }
  return list;
}

function numStrings(list) {
  var stringCount = 0;
  for (var i = 0; i < list.length; i++){
    if(typeof(list[i]) === "string"){
      stringCount++;
    }
  }
  return stringCount;
}