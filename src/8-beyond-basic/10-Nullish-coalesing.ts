console.log(0 && 5);
console.log(false && 5);
console.log(null && 5);
console.log(undefined && 5);
console.log(NaN && 5);

console.log("hi" && "hey");
console.log("hi" && 5);
console.log(false && 0);
//--------------------or

console.log("" || 5);
console.log(0 || 5);
console.log(false || 5);
console.log(null || 5);
console.log(undefined || 5);
console.log(NaN || 5);

console.log("hi" || "hey");
console.log("hi" || 5);
console.log(false || 0);

//--------------------??
console.log("" ?? 5);
console.log(0 ?? 5);
console.log(false ?? 5);
console.log(null ?? 5);
console.log(undefined ?? 5);
console.log(NaN ?? 5);

console.log("hi" ?? "hey");
console.log("hi" ?? 5);
console.log(false ?? 0);

