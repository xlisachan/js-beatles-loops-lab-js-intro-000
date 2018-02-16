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
  while (i < facts.length) {
    johnLennonSentence = facts[i] + "!!!");
    johnLennonArray.push(johnLennonSentence);
    i++;
  }
  return johnLennonArray;
}  