function color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let colorCodes=[];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            //to seperate the formatting from console.log
            colorCodes.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return colorCodes;
}

/*function print_color_map(colorCodes) {
   let loggedOutput = [];

    //Replace the console.log function with a custom function that pushes the output to an array
    const originalLog = console.log;
    console.log = function(color) {
        // Push the logged output to the array
        loggedOutput.push(color);
        // Call the original console.log function to output to the console
       originalLog.apply(console, arguments);
    };

    // Iterate over each color code in the colorCodes array
    colorCodes.forEach(color => {
        // Log each color code
        console.log(color);
    });

    // Restore the original console.log function
   console.log = originalLog;

    // Return the captured logged output
    return loggedOutput;
    
}*/
console.log(color_map());

module.exports= {color_map};
