function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(johnLennonFacts) {
  var newArray = [];
  var i = 0;
  while (i < johnLennonFacts.length){
    var newFact = (johnLennonFacts(i) + "!!!");
    newArray.push(newFact);
    i++;
  }
  return newArray;
}
