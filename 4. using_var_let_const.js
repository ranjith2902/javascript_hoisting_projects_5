// Before declaration
console.log(myVar); // Output: undefined

{
  // Variable declaration using let
  let myLet = "I am using let";
  console.log(myLet); // Output: "I am using let"

  // Variable declaration using var
  var myVar = "I am using var";
  console.log(myVar); // Output: "I am using var"

  // Variable declaration using const
  const myConst = "I am using const";
  console.log(myConst); // Output: "I am using const"
}

// After declaration
console.log(myVar); // Output: "I am using var"
console.log(myLet); // Output: Uncaught ReferenceError: myLetVar is not defined
console.log(myConst); // Output: Uncaught ReferenceError: myConstVar is not defined
