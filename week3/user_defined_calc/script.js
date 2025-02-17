const calculator= require('./calci')

let x=10,y=50

console.log("Sum of ",x,",",y,"=",calculator.add(x,y))

console.log("Difference of ",x,",",y,"=",calculator.subtract(x,y))

console.log("Product of ",x,",",y,"=",calculator.multiply(x,y))

console.log("Division of ",x,",",y,"=",calculator.divide(x,y))
