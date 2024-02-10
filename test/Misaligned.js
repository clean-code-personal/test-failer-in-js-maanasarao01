const {expect}=require('chai');
const {color_map} =require("../misaligned.js");

const loggedOutput= color_map();

// Check alignment of each parameter
//initially it will be unset
let setLengthBasedOnFirstRow=0

let saveEarlierPairNumber=-1

loggedOutput.forEach(colorCodes => {
  let colorParts = colorCodes.split('|');
  pairNumber = colorParts[0]; 
  let majorColor = colorParts[1];
  let minorColor = colorParts[2];
  
  // If lengths are not initialized, set them to the length of the first color code
  if (!setLengthBasedOnFirstRow){
    pairNumberLength = pairNumber.length;
    majorColorLength = majorColor.length;
    minorColorLength = minorColor.length;
    setLengthBasedOnFirstRow=1
  }
  
  // Check if lengths are consistent across all color codes
  expect(pairNumber.length).to.equal(pairNumberLength);
  expect(majorColor.length).to.equal(majorColorLength);
  expect(minorColor.length).to.equal(minorColorLength);
  
  //Range check
  expect(Number(pairNumber)).to.be.within(1,25);
  
  //check for duplicates
  expect((saveEarlierPairNumber).equals(pairNumber-1))
  saveEarlierPairNumber=pairNumber
});

// Check total color combinations
expect(color_map().length).to.equal(25);

console.log('All is well (maybe!)');
