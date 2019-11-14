function factorial(num){
  if(num === 1 || num === 0) return 1
  return num * factorial(num-1)
}

factorial(4)
// 4 * factorial(3)
//     3 * factorial(2)
//         2 * factorial(1) -> 1


// // function factorial(num){
//     let total = 1
//     for(let i = num; i > 1; i--){
//         total = total * i // 1*4 // 4 * 3 // 12 * 2 // 24 * 1
//     }

//     return total
// }
// factorial(4)
// 4 * 3 * 2 * 1
