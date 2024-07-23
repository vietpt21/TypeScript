// enum Course {
//     Ts,
//     Js,
// }

// function getPrice(course: Course) {
//     switch (course) {
//         case Course.Ts:
//             return "$29.99";
//         case Course.Js:
//             return "$19.99";
//         default:
//             courseErorr(course);
//     }
// }
// console.log(getPrice(Course.Js));
// function courseErorr(course:never):never{
//     throw new Error(`Course ${course} has not been pirice`);
// }