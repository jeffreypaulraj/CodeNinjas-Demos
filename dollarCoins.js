// $1.00/ $0.25 = 4 Quarters Max
// $1.00/ $0.10 = 10 Dimes Max
// $1.00/ $0.05 = 20 Nickels Max
// $1.00/ $0.01 = 100 Pennies Max

var possibleSolutions = 0;

for(pennies = 0; pennies <=100; pennies++){
  for(nickels = 0; nickels <= 20; nickels++){
    for(dimes = 0; dimes<=10; dimes++){
      for(quarters = 0; quarters <= 4; quarters++){
        if(quarters*0.25 + dimes*0.1 + nickels*0.05 + pennies*0.01 == 1){
          possibleSolutions++;
          console.log("Solution " + possibleSolutions + ": " + 
          quarters + " Quarters, " + dimes + " Dimes, " + nickels + " Nickels and " + pennies + " Pennies");
        }
      }
    }
  }
}
