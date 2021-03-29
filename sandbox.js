


// function compose(a, b){
//   function innerFunc(x){
//     return a * (b * x)
//   }
//   return innerFunc
// }

// OR

function compose(a, b){
  return x =>  a * (b * x)
}

const c = compose(6, 2)

console.log(c(3))