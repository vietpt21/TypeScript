"use strict";
console.log(0 && 5);
console.log(false && 5);
console.log(null && 5);
console.log(undefined && 5);
console.log(NaN && 5);
console.log("hi" && "hey");
console.log("hi" && 5);
console.log(false && 0);
console.log("" || 5);
console.log(0 || 5);
console.log(false || 5);
console.log(null || 5);
console.log(undefined || 5);
console.log(NaN || 5);
console.log("hi" || "hey");
console.log("hi" || 5);
console.log(false || 0);
console.log("" !== null && "" !== void 0 ? "" : 5);
console.log(0 !== null && 0 !== void 0 ? 0 : 5);
console.log(false !== null && false !== void 0 ? false : 5);
console.log(null !== null && null !== void 0 ? null : 5);
console.log(undefined !== null && undefined !== void 0 ? undefined : 5);
console.log(NaN !== null && NaN !== void 0 ? NaN : 5);
console.log("hi" !== null && "hi" !== void 0 ? "hi" : "hey");
console.log("hi" !== null && "hi" !== void 0 ? "hi" : 5);
console.log(false !== null && false !== void 0 ? false : 0);
