
function color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let colorCodes=[];
    const maxPairNumberLength = (majorColors.length * minorColors.length).toString().length;
    const maxMajorColorLength = Math.max(...majorColors.map(color => color.length));
    const maxMinorColorLength = Math.max(...minorColors.map(color => color.length));
    
        for (let i = 0; i < majorColors.length; i++) {
            for (let j = 0; j < minorColors.length; j++) {
                const pairNumber = i * 5 + j;
                const formattedPairNumber = pairNumber.toString().padEnd(maxPairNumberLength, ' ');
                const formattedMajorColor = majorColors[i].padEnd(maxMajorColorLength, ' ');
                const formattedMinorColor = minorColors[j].padEnd(maxMinorColorLength, ' ');
                colorCodes.push(`${formattedPairNumber} | ${formattedMajorColor} | ${formattedMinorColor}`);
            }
        }
    return colorCodes;
}

//log colorCodes to the console
     color_map().forEach(color => {
        // Log each color code
        console.log(color);
    });

module.exports= {color_map};
