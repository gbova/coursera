module.exports = (x, y, callback) => {
    if ( x <= 0 || y <= 0  ) {
        error = new Error("Rectangle dimenstions should be greater than 0");
        setTimeout(() =>
            callback(error, null),
            2000  // delay 2 seconds
        );
    } else {
        setTimeout(() =>
            callback(
                null,
                {
                    perimeter: () => (2 * (l + w)),
                    area: () => (l * w)
                }
            ),
            2000  // delay 2 seconds
        );
    }
}
