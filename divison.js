const fs = require("fs");

let [x, y] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

if (y === 0) {
    console.log("Division by zero");
    process.exit(0);
}

const sign = (x < 0) ^ (y < 0) ? -1 : 1;
x = Math.abs(x);
y = Math.abs(y);

function divide(low, high, count) {
    if (count === 100) return low;

    const mid = (low + high) / 2;

    return mid * y < x
        ? divide(mid, high, count + 1)
        : divide(low, mid, count + 1);
}

console.log((sign * divide(0, x, 0)).toFixed(5));
