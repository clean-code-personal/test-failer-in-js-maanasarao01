const {expect}=require('chai');
const { transmitInCelcius, getTransmissionFailureCount} =require('../transmitter.js');

let firstFailure=1;
let stubCode=500;//to simulate failure
function networkTransmitStub(celcius) {
    console.log(`Temperature to transmit: ${celcius} celcius`);
    const roundedNumber = Math.round(Math.random());
    if(firstFailure){
      //this is to ensure transmission of failure in network atleast once
      firstFailure=0;
    }
    else{
      // Map 0 to 200 and 1 to 500
      // This stub either returns 200 or 500
      stubCode = (roundedNumber == 0) ? 200 : 500;
    }
    return stubCode;
}

//using dependency injection
transmitInCelcius(400.5,networkTransmitStub);
console.log(`Transmission failed ${getTransmissionFailureCount} times.`);
transmitInCelcius(303.6,networkTransmitStub);
console.log(`Transmission failed ${getTransmissionFailureCount} times.`);

transmitInCelcius(300,networkTransmitStub); 
transmitInCelcius(400,networkTransmitStub);

transmitInCelcius(304.9,networkTransmitStub); 
console.log(`Transmission failed ${getTransmissionFailureCount} times.`);
expect(getTransmissionFailureCount).to.be.at.least(1);
console.log('All is well (maybe!)');
