// Code your solution in this file!
function distanceFromHqInBlocks(begin){

    let mhm = begin - 42

    if(mhm > 0){
        return mhm
    } else {
        return mhm * -1
    }
}

function distanceFromHqInFeet(begin){

    return distanceFromHqInBlocks(begin) * 264

}

function distanceTravelledInFeet(begin, second){


  let test =  second - begin
  
  if (test > 0) {
    return test * 264
  } else {
    return test * -1 * 264
  }
}

function calculatesFarePrice(start, destination){
    var test = distanceTravelledInFeet(start, destination)
    if(test >= 2000){
        if(test >= 2500){
            return "cannot travel that far"
        }
        return 25
    }
    if(test >= 400){
        if(test <=2000){
            return (test - 400) * .02
        }
    }
    return 0


}