const {expect}=require('chai');
const {color_map,print_color_map} =require("../misaligned.js");

const loggedOutput= print_color_map(color_map());

loggedOutput.forEach(colorCodes){
  let colorParts=colorCodes.split('|');
  expect(colorParts[0].length).equals(3);//this should fail if PairNumber is misaligned
  expect(colorParts[1].length).equals(7);//this should fail if the colorCodes are misaligned
  expect(colorParts[2].length).equals(7);//this should fail too
}
expect(color_map().length).equals(25);
console.log('All is well (maybe!)');
