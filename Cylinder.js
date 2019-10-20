//Create a function that can calculate the volume of a cylinder given its radius and height
cylinderVolume(2,1);

function cylinderVolume(radius, height){
  var volume = Math.PI * radius * radius * height;
  console.log("Volume: " + volume);
}
