// Code your solution in this file!
function distanceFromHqInBlocks (pickup) {
let hq = 42;
    if (pickup>hq) {
        return pickup - hq;
    }
    else {
        return hq - pickup;
    } 
}

function distanceFromHqInFeet (pickup) {
return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start,destination) {
if (start > destination)
return (start - destination) * 264;
else 
return (destination - start) * 264;    
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist > 400 && dist <= 2000) {
        return (dist - 400) * 0.02;   
    }
    else if (dist > 2000 && dist < 2500) {
        return 25
    } 
    else if (dist > 2500)
        return 'cannot travel that far'
    else 
        return 0
}