//The local weatherman says No Rain, and his record is 2/3 accuracy of prediction. But the Federal Meteorological Service predicts rain, and their record is 3/4.

//With no other data available, what is the chance of rain?

var localAccuracy = 2/3;
var nationalAccuracy = 3/4;

var chanceNoRain = localAccuracy*(1-nationalAccuracy);
var chanceRain = nationalAccuracy*(1-localAccuracy);

var chanceTotal = chanceNoRain + chanceRain;

console.log("Chance of No Rain: " + chanceNoRain/chanceTotal);

console.log("Chance of Rain: " + chanceRain/chanceTotal);
