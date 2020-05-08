// Simple Example of a Node program: Rectangles

var rect = require('./rectangle');

function solveRectangle (length, width) {
    console.log(`Solving for rectangle with l = ${length} and b = ${width}.`);
    rect(
        length,
        width,
        (err, rectangle) => {
            if (err) {
                console.log("ERROR: ", err.message);
            } else {
                console.log("The area of the rectangle is " + rectangle.area);
                console.log("The perimeter of the rectangle is " + rectangle.perimeter);
            }
        }
        );
};

solveRectangle(2, 4);
console.log("");
solveRectangle(3, 5);
console.log("");
solveRectangle(0, 5);
console.log("");
solveRectangle(-3, 5);