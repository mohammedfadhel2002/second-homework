const foods = ['pizza','cheeseburger']
console.log(foods)

const foods2 = ['pizza','cheeseburger']

foods2.unshift('taco')
console.log(foods2)

console.log(foods.indexOf('pizza'))

const favFood=['pizza']

foods.splice(1, 0, "tofu");
console.log(foods)

foods.splice(0,1,'sushi','cupcake')
console.log(foods)


const yummy= foods.slice(0,2
);
console.log(yummy)

const soyIdx=foods.indexOf('tofu')
console.log(soyIdx)

const allfoods = foods 
console.log(allfoods.join("->"));