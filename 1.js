const count = 10;
let randomArray = [];
const n = 1;
const m = -1;
const Max = Math.max(n, m)
const Min = Math.min(n, m)
while (randomArray.length < count) {
    randomNumber = Math.floor((Math.random() * (Max - Min + 1) + Min))
    randomArray.push(randomNumber)
}
console.log(randomArray)