function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (let i = 0; i < 4; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts() {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var johnLennonArray = [];
  var factsIndex = 0;
  while (i < facts.length) {
    johnLennonSentence = facts[factsIndex] + "!!!";
    johnLennonArray.push(johnLennonSentence);
    i++;
  }
  return johnLennonArray;
}  

