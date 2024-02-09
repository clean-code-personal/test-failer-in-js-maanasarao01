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

//log colorCodes to the console
     color_map().forEach(color => {
        // Log each color code
        console.log(color);
    });
    

module.exports= {color_map};
