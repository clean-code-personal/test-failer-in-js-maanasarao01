let transmissionFailureCount = 0;

let networkTransmitStub(celcius)=function {
    console.log(`Temperature to transmit: ${celcius} celcius`);

    // The intention here is to transmit the temperature over a network.
    // However, this is a stub, so we just print the message above
    // and give back a return code.

    // Return 200 for ok
    // Return 500 for not-ok
    // This stub always succeeds and returns 200
    return 200;
}

function transmitInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkTransmitStub(celcius);
    if (returnCode != 200) {
        // non-ok response indicates failure while transmitting over the network
        // let us keep a count of failures to report
        // However, this code doesn't increment failures - that's a bug!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        transmissionFailureCount += 0;
    }
}

module.exports={networkTransmitStub, transmitInCelcius};
