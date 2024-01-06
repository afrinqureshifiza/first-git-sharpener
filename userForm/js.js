function saveToLocalStorage(event){
    event.preventDefault()
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const tel=document.getElementById('tel').value

    const obj={
        name:name,
        email:email,
        phone:tel
    }
    
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showOnScreen(obj)

}

function showOnScreen(obj){
    const ul=document.querySelector('ul')
    const li=document.createElement('li')
    li.textContent=`${obj.name}-${obj.email}-${obj.phone}`
    ul.appendChild(li)
    
    const delbtn=document.createElement('button')
    delbtn.textContent='Delete'
    delbtn.addEventListener('click',(e)=>{
    //   e.target.parentElement.remove()
    //   ul.removeChild(li)
      li.remove()
      localStorage.removeItem(obj.email)
    })
    li.appendChild(delbtn)


    const editbtn=document.createElement('button')
    editbtn.textContent='Edit'
    editbtn.addEventListener('click',()=>{
        document.getElementById('name').value=obj.name
        document.getElementById('email').value=obj.email
        document.getElementById('tel').value=obj.phone
        li.remove()
        localStorage.removeItem(obj.email)
    })
    li.appendChild(editbtn)

}