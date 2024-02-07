const {expect}=require('chai');
const { transmitInCelcius, transmissionFailureCount} =require('../transmitter.js');

transmitInCelcius(400.5);
transmitInCelcius(303.6);

transmitInCelcius(300); 
transmitInCelcius(400);

transmitInCelcius(304.9); 
console.log(`Transmission failed ${transmissionFailureCount} times.`);
expect(transmissionFailureCount).to.be.at.least(1);
console.log('All is well (maybe!)');
