// type Course={
//     name:string,
//     price:number,
//     salas:number,
//     rating:Number,
// }
// type Product={
//     name:string;
//     price:number,
//     categories:string
// }
// type OnlineCourse=Product|Course;
// const course:OnlineCourse={
//     name:"ts",
//     price:10,
//     categories:"Sp",
//     salas:0.3
// }
//---------------------------
// type digitalProduct={
//     name:string,
//     price:number,
//     sales:number,
// }
// type Course=digitalProduct &{
//     name:string,
//     price:number,
//     sales:number,
//     rating:Number,
// }
// type Product =digitalProduct &{
//     released:boolean,
//     rating:string,
// }

// type OnlineCourse=Product|Course;
// const course:OnlineCourse={
//     name:"ts",
//     price:10,
//     released:true,
//     rating:"kk",
//     sales:0.3,
// }
//------------------------------------
// type digitalProduct={
//     name:string,
//     price:number,
//     sales:number,
// } &(|{availiability:string;categories:string}
//     |{released:boolean;rating:number}
// )
// type Course=digitalProduct &{
//     name:string,
//     price:number,
//     sales:number,
//     rating:Number,
// }
// type Product =digitalProduct &{
//     released:boolean,
//     rating:string,
// }

// type OnlineCourse=Product|Course;
// const course:OnlineCourse={
//     name:"ts",
//     price:10,
//     released:true,
//     rating:10,
//     sales:0.3,
     
// }