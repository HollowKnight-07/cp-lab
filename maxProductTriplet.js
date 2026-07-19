const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++];
const arr = input.slice(idx, idx + n);

const product = (a) => {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= min1) {
            min2 = min1;
            min1 = a[i];
        } else if (a[i] < min2) {
            min2 = a[i];
        }

        if (a[i] >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = a[i];
        } else if (a[i] >= max2) {
            max3 = max2;
            max2 = a[i];
        } else if (a[i] > max3) {
            max3 = a[i];
        }
    }

    return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(product(arr));
