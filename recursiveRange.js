// function accepts a number and add up all the numbers from 0 to the number passed to the function
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num){
    if(num === 1) return 1
   return num + recursiveRange(num - 1)
}

// 6 + recursiveRange(5)
//      5 + recursiveRange(4)
//           4 + recursiveRange(3)
//                  3 + recursiveRange(2)
//                          2 + recursiveRange(1) -> 1
