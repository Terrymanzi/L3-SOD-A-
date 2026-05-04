// // // let name = "Blaise";
// // // let age = 20
// // // let isTeenager = false
// // // let isMarried = null
// // // const PI = 3.14;

// // let l3SODA = ["Jess", "Noella", "Lucky", "Bertrand", "Fred", "Gay"]

// // // for (let i=0; i < 6;i++){
// // // console.log(l3SODA[i]);
// // // };

// // // function sortStudents(){

// // // }

// // // sortStudents()

// // let grades = [102, 20, 3, 570, 980]

// // function sortGrades(array){
// //         for(let j = 0; j < array.length; j++){
// //             if(array[j] > array[j+1]){
// //                 // console.log(grades[j])
// //                 // console.log(grades[j++])
// //                 array[j] =array[j+1]
// //             }
// //             return array
// //         }
// // }

// // console.log(sortGrades(grades))

// let L3SODAobject = {
//     numberOfStudents: 36,
//     equipments: ["Monitor", "chairs", "tables", "router", "cameras"],
//     teachers: ["terry", "Manzi"]
// }

// console.log(L3SODAobject.teachers)

let users = [
  { name: "Thierry", email: "thierry@gmail.com", password: 123 },
  { name: "Kagaba", email: "kagaba@gmail.com", password: 345 },
  { name: "Nshuti", email: "nshuti@gmail.com", password: 987 },
];

function userLogin(emailInput, passwordInput) {
  for (let i = 0; i < users.length; i++) {
    if (emailInput === users[i].email && passwordInput === users[i].password) {
      console.log("Login Successful");
      break;
    } else {
      console.log("Wrong password or email!");
      break;
    }
  }
}

// calling the function
userLogin("thierry@gmail.com", 1234);
