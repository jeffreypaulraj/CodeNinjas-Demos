//Sensei Maria has only 1 pound and 3 pound weights. How many possible combinations should she make if she wants 99 pounds total?

//Sensei Maria has only 1 pound and 5 pound weights. How many possible combinations should she make if she wants 11 pounds total?


//We will be making a method today!

weightCombinations(1,5,11);
console.log("");
weightCombinations(1,3,99);

function weightCombinations( lowerWeight, higherWeight, targetWeight){

var lowerMax = targetWeight/lowerWeight;
var higherMax = targetWeight/higherWeight;
var solutionCounter = 0;
for(var i = 0; i <= lowerMax; i++){
  for(var j = 0; j <= higherMax; j++){
    if(lowerWeight*i + higherWeight*j == targetWeight){
      solutionCounter++;
      console.log("Solution " + solutionCounter + ": " + i + " " + lowerWeight + "-pound weights and " + j + " " + higherWeight + "-pound weights.");
    }
  }
}

}
