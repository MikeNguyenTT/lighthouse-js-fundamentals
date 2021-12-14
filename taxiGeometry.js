const blocksAway = function(directions) {
  // Put your solution here
  let positionObj = {};
  let upDownLeftRight;
  let verticalPosition = 0;
  let horizontalPosition = 0;
  let directionArray = addToArrayOfObject(directions);
  // initialise up/down/left/right for first move
  if (directionArray[0].direction === "right") {
    upDownLeftRight = "right"; 
    horizontalPosition += directionArray[0].blocks;
  } else {
    upDownLeftRight = "up";
    verticalPosition += directionArray[0].blocks;
  }

  // subsequent move
  for (let i = 1; i < directionArray.length; i++) {
    if (directionArray[i].direction === "right") {
      if (upDownLeftRight === "up") {
        horizontalPosition += directionArray[i].blocks;
        upDownLeftRight = "right";
      }
      else if (upDownLeftRight === "down") {
        horizontalPosition -= directionArray[i].blocks;
        upDownLeftRight = "left";
      }
      else if (upDownLeftRight === "right") {
        verticalPosition -= directionArray[i].blocks;
        upDownLeftRight = "down";
      }
      else if (upDownLeftRight === "left") {
        verticalPosition += directionArray[i].blocks;
        upDownLeftRight = "up";
      }
    }
    else if (directionArray[i].direction === "left") {
      if (upDownLeftRight === "up") {
        horizontalPosition -= directionArray[i].blocks;
        upDownLeftRight = "left";
      }
      else if (upDownLeftRight === "down") {
        horizontalPosition += directionArray[i].blocks;
        upDownLeftRight = "right";
      }
      else if (upDownLeftRight === "right") {
        verticalPosition += directionArray[i].blocks;
        upDownLeftRight = "up";
      }
      else if (upDownLeftRight === "left") {
        verticalPosition += directionArray[i].blocks;
        upDownLeftRight = "down";
      }
    }
  }
  horizontalPosition >= 0 ? positionObj["east"] = horizontalPosition : positionObj["west"] = Math.abs(horizontalPosition);
  verticalPosition >= 0 ? positionObj["north"] = verticalPosition : positionObj["south"] = Math.abs(verticalPosition);

  return positionObj;
};



const addToArrayOfObject = function(directions) {
  let directionArray = [];
  for (let i = 0; i < directions.length; i++) {
    let directionDetail = {};
    if (!Number.isInteger(directions[i])) {
      directionDetail["direction"] = directions[i];
      directionDetail["blocks"] = directions[i+1];
      directionArray.push(directionDetail);
    }
  }
  return directionArray;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));