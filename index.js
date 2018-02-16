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
    var newFact = (johnLennonFacts[i] + "!!!");
    newArray.push(newFact);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var i = 0;
  do {
    newArray.push("I love the Beatles!");
    i++;
  } while(i < number || i < 15);
  return newArray;
}

describe('iLoveTheBeatles', function() {
  it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
    expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
  });

  it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
    expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
  });
});

});
