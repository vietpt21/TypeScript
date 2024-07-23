// type Product ={
//     name:string,
//     info:ProductInfo|undefined; 
// }
// type ProductInfo={
//     level:string,
//     nooOfSudents:number
// }
// const course:Product[]=[
//     {
//         name:"ts",
//         info:{
//             level:"lv1",
//             nooOfSudents:100
//         }
//     },
//     {
//         name:"js",
//         info:{
//             level:"lv1",
//             nooOfSudents:undefined
//         }
//     },
// ]
// console.log(course.map((course)=>course.info?.nooOfSudents));
// const courseInfo=course.map((course)=>{
//     course.info ? course.info.nooOfSudents:undefined;
// });
// console.log(courseInfo);