// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return street>42 ? street - 42 : 42 - street;
};

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value)*264
};

function distanceTravelledInFeet(start, end){
    return start>end? (start - end)*264 : (end-start)*264

};

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <=400){
        return 0
    } else if(distance < 2000){
        return (distance-400)*.02
    } else if(distance > 2000 && distance <2500){
        return 25
    } else {
            return "cannot travel that far"
    }
};