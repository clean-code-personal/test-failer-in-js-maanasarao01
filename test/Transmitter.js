import {networkTransmitStub, transmitInCelcius} from "./transmitter.js";

transmitInCelcius(400.5);
transmitInCelcius(303.6);

networkTransmitStub=function(celsius){
    //non-ok response to simulate failure
    console.log(`Simulating Failue! Temperature to transmit: ${celcius} celcius`);
    return 500;
}
transmitInCelcius(300);//this sould fail 
console.log(`Transmission failed ${transmissionFailureCount} times.`);
//console.log('All is well (maybe!)');
