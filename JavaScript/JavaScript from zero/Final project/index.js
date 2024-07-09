/**
 * Logic to create orders and charge the usuers request 
 */
const user = {
    name: "Beto",
    age: 30,
    debt:0
}

let order = []
let costOrder = 0

//List of all the elements in the menu 
const showMenu = () => {
    console.log(`Code - Product name - Cost`)
    product.forEach(product=> console.log(`${product.code} -  ${product.name} - $${product.cost}`))
}

const askProduct = cod =>  {
 if (!cod) return "enter a code"
 
 const productFinder = product.find(product => product.codigo === cod)
 if(!productFinder) return "This product does not exist"
    
 order.push(productFinder)

console.log("The product has been add to the order. Your order is: ")
return showMenu()
}

const showOrder = () => order

const calculateCost = () => {
    let cost =0
    for(product of order){
        cost += producto.cost
    }

    costOrder = cost;
    return costOrder;
} 

const endOrder = () => {
    calculateCost()
    user.debt = costOrder;


    order = []
    costOrder = 0

    return`${user.name}, you have to pay $${user.debt}`
}

//Function pay order and deliver change 
const payOrder = amount => {
switch(amount){
    case (amount < user.debt) :  "You have not enough money"
    break
    case (amount === user.debt) : user.debt = 0 && "Your order has been paid"
    break
    case (amount > user.debt) :  console.log(`Your order has been paid and your change is ${amount-user.debt}`) 
    break
    default : console.log ("You can not realize this action")
    break
}
}