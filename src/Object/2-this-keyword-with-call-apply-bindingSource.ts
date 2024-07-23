const person={
    objFunc():void{
        console.log("object",this);
    },
};
person.objFunc();
//------------------------------------
function addition(this: any): void {
    console.log("function", this);
}
addition();
//------------------------------------
class Test{
    classFunc():void{
        console.log("class",this);
    }
}
let test =new Test();
test.classFunc();
