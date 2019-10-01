//Ninja Arav went to a cycle show, and he counted 25 wheels in total. The only types of cycles he saw were bicycles, which have two wheels, and tricycles, which have three wheels. How many bicycles and tricycles did Ninja Arav see? There are four solutions!

//Maximum number of bicycles: 25/2 = 12.
//Maximum number of tricycles: 25/3 = 8.

for(var bicycles = 0; bicycles <= 12; bicycles++){
  for(var tricycles = 0; tricycles <= 8; tricycles++){
    bicycleWheels = 2*bicycles;
    tricycleWheels = 3*tricycles;
    if(bicycleWheels + tricycleWheels == 25){
      console.log("Ninja Arav saw " + bicycles + " bicycles and " + tricycles + " tricycles.")
    }
  }
}
