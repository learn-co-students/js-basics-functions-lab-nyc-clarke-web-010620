
function distanceFromHqInBlocks(position) {
    let dist; 
    if (position >= 42) {
        dist = position - 42;
    } else {
        dist = 42 - position;
    }
    return dist;
}

function distanceFromHqInFeet(position) {
    let dist; 
    if (position >= 42) {
        dist = (position - 42) * 264;
    } else {
        dist = (42 - position) * 264;
    }
    return dist;
}

function distanceTravelledInFeet(num1, num2) {
    let distance;
    if (num1 >= num2) {
        distance = (num1 - num2) * 264;
    } else {
        distance = (num2 - num1) * 264;
    }

    return distance;
}


function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }