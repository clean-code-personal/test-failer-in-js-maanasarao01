const { transmitInCelcius, transmissionFailureCount} =require('../transmitter.js');
let {networkTransmitStub}=require('../transmitter.js');
transmitInCelcius(400.5);
transmitInCelcius(303.6);

networkTransmitStub=function(celcius){
    //non-ok response to simulate failure
    console.log(`Simulating Failue! Temperature to transmit: ${celcius} celcius`);
    return 500;
}
console.log(transmitInCelcius(300));//this sould fail 
console.log(`Transmission failed ${transmissionFailureCount} times.`);
//console.log('All is well (maybe!)');
