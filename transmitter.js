let transmissionFailureCount = 0;

function networkTransmitStub(celcius) {
    console.log(`Temperature to transmit: ${celcius} celcius`);
    const roundedNumber = Math.round(Math.random();
    // Map 0 to 200 and 1 to 500
    const stubCode = (roundedNumber === 0) ? 200 : 500;
    // The intention here is to transmit the temperature over a network.
    // Return 200 for ok
    // Return 500 for not-ok
    // This stub either returns 200 or 500
    return stubCode;
}

function transmitInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkTransmitStub(celcius);
    if (returnCode != 200) {
        // non-ok response indicates failure while transmitting over the network
        // let us keep a count of failures to report
        // However, this code doesn't increment failures - that's a bug!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        transmissionFailureCount += 1;
    }
}

module.exports={transmitInCelcius,transmissionFailureCount};
