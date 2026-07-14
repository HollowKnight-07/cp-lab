const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++];
const m = input[idx++];

const a = input.slice(idx, idx + n);
idx += n;
const b = input.slice(idx, idx + m);

let i = 0, j = 0;
const merged = [];

while (i < n && j < m) {
    if (a[i] <= b[j]) {
        merged.push(a[i++]);
    } else {
        merged.push(b[j++]);
    }
}

while (i < n) merged.push(a[i++]);
while (j < m) merged.push(b[j++]);

const len = merged.length;

if (len % 2 === 0) {
    console.log((merged[len / 2 - 1] + merged[len / 2]) / 2);
} else {
    console.log(merged[Math.floor(len / 2)]);
}
