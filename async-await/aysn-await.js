console.log('person 1 tickects')
console.log('person 2 tickects')

async function getitems(){
 let gettickects= new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve('tickets')
   },2000)
})

let geticecream=new Promise((resolve,reject)=>{ resolve(`icecream`) })

let getchocolate=new Promise((resolve,reject)=>{ resolve(`chocolate`) })
   
let getColdDrinks=new Promise((resolve,reject)=>{ resolve(`cold drinks`) })

// let tickects=await gettickects
// console.log(tickects)

// let icecream=await geticecream
// console.log(icecream)

// let chocolate=await getchocolate
// console.log(chocolate)

// let colddrink=await getColdDrinks
// console.log(colddrink)

return Promise.all([gettickects,geticecream,getchocolate,getColdDrinks]).then((val)=>console.log(val))

}
getitems()

console.log('person 4 tickects')
console.log('person 5 tickects')