// Code your solution in this file!

function distanceFromHqInBlocks(value){
    let blocks = Math.abs(42 - value)
    return blocks 
}

function distanceFromHqInFeet(value){
    let blocks = distanceFromHqInBlocks(value)
    let blocksInFeet = blocks * 264
    return blocksInFeet
}

function distanceTravelledInFeet(startBlock, endBlock){
    let blocks = Math.abs(startBlock - endBlock)
    let blocksInFeet = blocks * 264
    return blocksInFeet
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)

    switch (true){
        case feet < 400:
            return 0
            break
        
        case feet >= 400 && feet <= 2000:
            return (feet-400)*0.02
            break

        case feet > 2000 && feet <= 2500:
            return 25
            end

        default:
            return 'cannot travel that far'

    }
}