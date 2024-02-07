const {size}=require("../tshirts.js");
const {expect} = require('chai');

expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
expect(size(38)).equals('M');//this should fail here as the function returns 'L'
console.log('All is well (maybe!)');
