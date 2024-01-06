let liItems=document.getElementsByTagName('li')
for(let i=0;i<liItems.length;i++){
  let btn=document.createElement('button')
  btn.innerText='edit'
  btn.className='edit-btn'
   liItems[i].appendChild(btn)
}

// Implement the code as in video but with one extra 'Edit' button in 'li'
let form=document.querySelector('form')
let fruits=document.querySelector('.fruits')
let fruit=document.querySelector('.fruit')
let fruitToAdd=document.querySelector('#fruit-to-add')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let li=document.createElement('li')
  li.innerHTML=input.value+'<button class="delete-btn">x</button>'
  fruits.appendChild(li)
  
 
})

let deletebtn=document.querySelector('.delete-btn')
fruits.addEventListener('click',(event)=>{
   if(event.target.classList.contains('delete-btn')){
     fruits.removeChild(event.target.parentElement)
   }
})
