const {expect}=require('chai');
const {color_map} =require("../misaligned.js");

const loggedOutput= color_map();

// Check alignment of each parameter
let pairNumberLength = null;
let majorColorLength = null;
let minorColorLength = null;

loggedOutput.forEach(colorCodes => {
  let colorParts = colorCodes.split('|');
  let pairNumber = colorParts[0]; 
  let majorColor = colorParts[1];
  let minorColor = colorParts[2];

  // If lengths are not initialized, set them to the length of the first color code
  if (pairNumberLength === null) {
    pairNumberLength = pairNumber.length;
    majorColorLength = majorColor.length;
    minorColorLength = minorColor.length;
  }

  // Check if lengths are consistent across all color codes
  expect(pairNumber.length).to.equal(pairNumberLength);
  expect(majorColor.length).to.equal(majorColorLength);
  expect(minorColor.length).to.equal(minorColorLength);
});

// Check total color combinations
expect(color_map().length).to.equal(25);

console.log('All is well (maybe!)');
