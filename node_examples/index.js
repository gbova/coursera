// Simple Example of a Node program: Rectangles

var rect = require('./rectangle');

function solveRectangle (length, width) {
    console.log(`Solving for rectanle with l = ${length} and b = ${width}.`);

    if (length <= 0 || width <= 0) {
        console.log("Rectangle dimensions must be greater than zero (0).");
        return;
    };

    console.log(`The area of the rectangle is ${rect.area(length, width)}.`);
    console.log(`The perimeter of the rectangle is ${rect.perimeter(length, width)}.`);
};

solveRectangle(2, 4);
console.log("");
solveRectangle(3, 5);
console.log("");
solveRectangle(0, 5);
console.log("");
solveRectangle(-3, 5);