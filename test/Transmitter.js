const {expect}=require('chai');
const { transmitInCelcius, transmissionFailureCount} =require('../transmitter.js');

let flag=1;
function networkTransmitStub(celcius) {
    console.log(`Temperature to transmit: ${celcius} celcius`);
    const roundedNumber = Math.round(Math.random());
    const stubCode;
    if(flag){
      flag=0;
      return 500;
    }
    else{
      // Map 0 to 200 and 1 to 500
      // This stub either returns 200 or 500
      stubCode = (roundedNumber == 0) ? 200 : 500;
      return stubCode;
    }
}

//using dependency injection
transmitInCelcius(400.5,networkTransmitStub);
transmitInCelcius(303.6,networkTransmitStub);

transmitInCelcius(300,networkTransmitStub); 
transmitInCelcius(400,networkTransmitStub);

transmitInCelcius(304.9,networkTransmitStub); 
console.log(`Transmission failed ${transmissionFailureCount} times.`);
expect(transmissionFailureCount).to.be.at.least(1);
console.log('All is well (maybe!)');
