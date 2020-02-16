// Code your solution in this file!
function distanceFromHqInBlocks(somevalue) {
    return Math.abs(42-somevalue);
};

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264
};

function distanceTravelledInFeet(starting, ending) {
    return Math.abs(starting - ending) * 264
};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    switch (true) {
        case (distance < 400):
            return 0;
        case (distance >= 400 && distance <= 2000):
            return ((distance - 400) * .02);
        case (distance > 2000 && distance <= 2500):
            return 25;
        case (distance > 2500):
            return 'cannot travel that far';
    }


}