function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts() {
  var johnLennonArray = [];
  var i = 0;
  while(i < johnLennonFacts.length) {
    var johnLennonSentence = (johnLennonFacts[i] + "!!!");
    johnLennonArray.push(johnLennonSentence);
    i++;
  }
  return johnLennonArray;
}  
