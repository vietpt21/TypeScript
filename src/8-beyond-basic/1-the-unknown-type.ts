// let str:unknown = "Ts";
// let num:unknown =10;
// let otherStr:string = str;// can not
//-----------------------------------------
// let num:unknown =10;
// let otherNum:number = typeof num ==="number"? num:20;
// console.log(otherNum);
//------------------------------------------
// let productName:any="Ts";
// let product:unknown =productName;
//--------------------------------------------
// let productName:unknown="Ts";
// let product:any =productName;
// let price:number = product
// console.log(price);
//---------------------------
// let productName:any="Ts";
// let product:unknown =productName;
// // // let price:number = product //can not
// let price:number = typeof product ==="number"? product:20;
// console.log(price);
//---------------------------------
// let product:unknown |string="Ts";
// let productName:string = product//can not