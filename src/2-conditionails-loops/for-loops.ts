// for(let i:number=0;i<10;i++){
//     console.log(i);
// }
// let mang= [10,20,30,40,50];
// for(let i:number= 0;i<mang.length;i++){
//     console.log(mang[i]);
// }
let mang :(number|string)[]= ["Pham Viet",23,"Hai phong"];
// for(let x of mang.entries()){
//     // console.log(x);
//     console.log(x[0],x[1]);
// }
// for(let[i,x] of mang.entries()){
   
//     console.log(`${i+1}-${x}`);
// }
for(let i in mang){
    // console.log(i);

    // console.log(typeof i);
    // console.log(typeof +i) ; //+= int
    // console.log(`${+i+1}-${mang[i]}`);
}