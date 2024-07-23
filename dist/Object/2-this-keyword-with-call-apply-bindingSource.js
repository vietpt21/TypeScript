"use strict";
const person = {
    objFunc() {
        console.log("object", this);
    },
};
person.objFunc();
function addition() {
    console.log("function", this);
}
addition();
class Test {
    classFunc() {
        console.log("class", this);
    }
}
let test = new Test();
test.classFunc();
