function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts() {
  var newArray = [];
  var johnLennonFactsIndex = 0;
  while (johnLennonFactsIndex < johnLennonFacts.length) {
    var johnLennonSentence = johnLennonFacts[johnLennonFactsIndex] + "!!!";
    newArray.push(johnLennonSentence);
    johnLennonFactsIndex++;
  }
  return newArray;
}
