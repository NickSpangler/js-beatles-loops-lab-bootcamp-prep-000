function theBeatlesPlay(musicians, instruments) {
  var musiciansPlayInstruments = [];
  for (let num = 0; num < musicians.length; num++) {
   musiciansPlayInstruments.push(musicians[num] + " plays " + instruments[num]); 
  }
  return musiciansPlayInstruments;
}

function johnLennonFacts(array) {
  var loudFacts = [];
  let num = 0
  while (num < array.length) {
    console.log("hello")
  }
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
  emptyArray.push("I love the Beatles!");
  number++;
      } 
  while (number < 15);
  return emptyArray;
}