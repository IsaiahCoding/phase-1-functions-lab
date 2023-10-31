function distanceFromHqInBlocks(blocks){
    const hqBlocks =42
    return Math.abs (blocks - hqBlocks)
}

function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264;
    const hqBlock = 42; 
    const hqFeet = hqBlock * feetPerBlock; 
    const distanceInFeet = Math.abs(blocks * feetPerBlock - hqFeet); 
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      const fareInCents = (distanceInFeet - 400) * 0.02;
      return Number.parseFloat(fareInCents.toFixed(2));
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }