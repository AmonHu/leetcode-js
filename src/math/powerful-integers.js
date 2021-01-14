/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    let set = new Set();
    for (let i = 0; Math.pow(x, i) + Math.pow(y, 0) <= bound; i++) {
        for (let j = 0; Math.pow(x, i) + Math.pow(y, j) <= bound; j++) {
            set.add(Math.pow(x, i) + Math.pow(y, j));

            if (y === 1) {
                break;
            }
        }
        if (x === 1) {
            break;
        }
    }

    return Array.from(set);
};

console.log(powerfulIntegers(2, 1, 10));