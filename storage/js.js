// function handleFormSubmit(event){
//     event.preventDefault();

//     const form=event.target

//     const username=document.querySelector('#username').value
//     const phone=document.querySelector('#phone').value
//     const email=document.querySelector('#email').value

//     const myObj={
//         username:username,
//         email:email,
//         phone:phone,
//     }

//     localStorage.setItem(myObj.username,JSON.stringify(myObj))

//     // let details=JSON.parse(localStorage.getItem('myObj'))

//     let li=document.createElement('li')
//     const string=`${myObj.username}-${myObj.email}-${myObj.phone}`
//   let liText=document.createTextNode(string)
//     li.appendChild(liText)
//     // console.log(li)
//     let display=document.querySelector('ul')
//     display.appendChild(li)

//     let del=document.createElement('button')
//     let deltext=document.createTextNode('delete')
//     del.appendChild(deltext)
//     li.appendChild(del)
//     del.addEventListener('click',(event)=>{
//         event.preventDefault();
//       event.target.parentElement.remove()
//       localStorage.removeItem(myObj.username)
//     })
    
//     let edit=document.createElement('button')
//     let edittext=document.createTextNode('edit')
//     edit.appendChild(edittext)
//     li.appendChild(edit)

//     edit.addEventListener('click',(event)=>{
//       event.preventDefault();
//       let objtoedit=JSON.parse(localStorage.getItem(myObj.username))
//        document.querySelector('#username').value=objtoedit.username
//       document.querySelector('#phone').value=objtoedit.phone
//       document.querySelector('#email').value=objtoedit.email
//       event.target.parentElement.remove()
//     //   localStorage.removeItem('myObj')
//       localStorage.removeItem(myObj.username)
//     })
// }

// // x=10
// console.log(x)
// var x=2

// let nums=[1,2,3,4]
// let newarr=nums.forEach((index,elemet)=>{
//   console.log(index)
//   // console.log(elemet)
//   return index
// })
// console.log(newarr)

// var a = 50;



// function fun(){

// var a =30;

// let b = 20;

// let c = 30;

// }

// fun();

// console.log(a)

// var obj = {

//   val: 100
  
//   }
  
//   function fun(){
  
//   console.log(this.val)
  
//   }
  
//   obj.fun()

// var obj = {

//   val: 100
  
//   }
  
//   function fun(a, b , c){
  
//   console.log(a)
  
//   console.log(b)
  
//   console.log(c)
  
//   }
  
//   fun.call(obj, [3, 4, 5])

// var obj = {

//   val: 100
  
//   }
  
//   function fun(a, b , c){
  
//   console.log(this.val + a + b + c)
  
//   }
  
//   fun.apply(obj,[ 3, 4, 5])

// /class a{
//   static b=1
  
//   static c(){
//     console.log(this.b)
//     console.log(a.b)
//   }
  
// }

// a.b=3
// const a1=new a
// a.c()

// var fun = a =>{
//   a
// } 

// var a =10;

// console.log(fun(a))

let obj={
  name:'afrin',
  thisarrow:()=>{
    console.log(this.name)
  },
  thisregular:function(){
    console.log(this.name)
  }
}
obj.thisarrow()