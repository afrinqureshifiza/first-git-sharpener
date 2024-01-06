

// Implement the code as in video but with one extra 'Edit' button in 'li'
let form=document.querySelector('form')
let ul=document.querySelector('.fruits')
let input=document.querySelector('#fruit-to-add')


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  //newlist
  let newli=document.createElement('li')
  newli.innerHTML=input.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>'
  newli.className='fruit'
  ul.appendChild(newli)
 

})

//deletebtn
// let deletebtn=document.querySelectorAll('.delete-btn')
// for(let i=0;i<deletebtn.length;i++){
//     deletebtn[i].addEventListener('click',(e)=>{
//       e.target.parentElement.remove()
//     })
// }

ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
       const fruitToDelete= e.target.parentElement
       ul.removeChild(fruitToDelete)
    }
})

//editbtn
let liItems=document.querySelectorAll('.fruit')
for(let i=0;i<liItems.length;i++){
  let btn=document.createElement('button')
  btn.innerText='edit'
  btn.className='edit-btn'
  liItems[i].appendChild(btn)
}

// ul.addEventListener('click',(event)=>{
//     console.log(event.target)
// })

let searchInput= document.getElementById('filter')
searchInput.addEventListener('keyup',(event)=>{
    // console.log(searchInput.value)
    for(let i=0;i<liItems.length;i++){
        let textEntered=searchInput.value.toLowerCase()
        let str=liItems[i].firstChild.textContent.toLowerCase()
        if(str.indexOf(textEntered)==-1){
            liItems[i].style.display='none'
        }
        else{
            liItems[i].style.display='flex'
        }
    } 
})


