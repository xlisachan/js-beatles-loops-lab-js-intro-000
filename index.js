function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts() {
  var johnLennonArray = [];
  var johnLennonFactsIndex = 0;
  while (johnLennonFactsIndex < facts.length) {
    var johnLennonSentence = johnLennonFacts[johnLennonFactsIndex] + "!!!";
    johnLennonArray.push(johnLennonSentence);
    johnLennonFactsIndex++;
  }
  return johnLennonArray;
}
