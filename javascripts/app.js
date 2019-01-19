// Rover Object Goes Here
var rover = {
  direction: "N",
  position: [0, 0],
  travelLog:[]

}

// Turn Left function 
function turnLeft(rover) {
  
  rover.travelLog.push("Turned left");
    
  switch(rover.direction) {

    case "N":
    rover.direction = "W";
    break;

    case "S":
    rover.direction = "E"
    break;

    case "E":
    rover.direction = "N"
    break;

    case "W":
    rover.direction = "S";
    break;
} 

console.log("The rover current position is " + rover.direction )
}

// Turn Right function
function turnRight(rover){

  rover.travelLog.push("Turned right");
   
  switch(rover.direction) {
      
    case "N":
    rover.direction = "E";
    break;

    case "S":
    rover.direction = "W";
    break;

    case "E":
    rover.direction = "S";
    break;

    case "W":
    rover.direction = "N";
    break;
  }

  console.log("The rover current position is " + rover.direction )
}


// Move Forward function
function moveForward(rover){

    rover.travelLog.push("Moved Forward");

    switch(rover.direction) {
       
      case "N":
      rover.position[1] -= 1;
      break;

      case "S":
      rover.position[1] += 1;
      break;

      case "E":
      rover.position[0] += 1;
      break;

      case "W":
      rover.position[0] -= 1;
      break;

    }

    console.log("The rover current position is " + rover.direction )
}

// Command Receiver Function
function commandReceiver(command) {
  console.log("The command '" + command + "' was called" );

  for (i = 0; i < command.length; i++) {

  switch (command[i]) {

      case "f":
      moveForward(rover);
      break;

      case "r":
      turnRight(rover);
      break;

      case "l":
      turnLeft(rover);
      break;
  }
}
}






