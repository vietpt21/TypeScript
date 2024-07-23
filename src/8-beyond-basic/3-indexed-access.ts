// let product ={
//     name :"ts",
//     price:10
// }
// let course = product.name;
// let gia = product["name"];
//-----------------------------------
// type product={
//     name:string;
//     price:number;
//     moreinfo:{
//         level :string;
//         check:boolean;
//         beginer:boolean;
//     }
// }
// function InfoProduct(name:string,price:number,moreinfo:product["moreinfo"]):product{
//     return {name,price,moreinfo};
// }
// let courseInfo = InfoProduct("ts",100,{level:"beginer",check:true,beginer:true});
// console.log(courseInfo);
//-----------------------------------
// type product={
//     name:string;
//     price:number;
//     moreinfo:{
//         level :string;
//         check:boolean;
//         beginer:boolean;
//     }
// }
// let courseName:product["name"]="Ts";
// let coursePrice:product["price"]=100;
// let courseMoreinfo:product["moreinfo"]["level"]="lv1";
// let courseMoreinfo1:product["moreinfo"]={level:"lv1",check:true,beginer:true};
// let courseInfo:product["name"|"price"]="10";
// console.log(courseInfo);

