const {size}=require("../tshirts.js");
const {expect} = require('chai');
 
expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
expect(size(38)).equals('S');//this should pass now 
console.log('All is well (maybe!)');
