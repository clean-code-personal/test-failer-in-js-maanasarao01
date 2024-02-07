const {expect} = require('chai')

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

function print_color_map(colorCodes){
     colorCodes.forEach(color => {
        console.log(color);
     });
}

print_color_map(color_map());
result =color_map().length;
expect(result).equals(25);
console.log('All is well (maybe!)');
