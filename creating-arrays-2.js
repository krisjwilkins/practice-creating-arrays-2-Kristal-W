let stringArr = Array(7);

console.log(stringArr.fill("Hello"));
console.log(stringArr.fill("Goodbye", 1,5));

let newArr = Array(5);

for (let i = 0; i < newArr.length; i++) {
newArr[i] = i * 10
}
console.log(newArr);