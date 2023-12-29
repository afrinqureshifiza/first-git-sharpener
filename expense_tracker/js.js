function addExpense(event){
    event.preventDefault()

    const a=document.getElementById('amount').value
    const d=document.getElementById('desc').value
    const c=document.getElementById('category').value

    const obj={
        amount:a,
        description:d,
        category:c
    }

    localStorage.setItem(obj.description,JSON.stringify(obj))
    
    //new list item created
    let newlist=document.createElement('li')
    newlist.innerText=`${obj.amount}-${obj.description}-${obj.category}`
    let ul=document.querySelector('ul')
    ul.appendChild(newlist)

    //delete btn
    let delbtn=document.createElement('button')
    delbtn.innerText='Delete expense'
    newlist.appendChild(delbtn)
    delbtn.addEventListener('click',(e)=>{
     newlist.remove()
     localStorage.removeItem(obj.description)
    })

    //edit btn
    let editbtn=document.createElement('button')
    editbtn.innerText='edit expense'
    newlist.appendChild(editbtn)
    editbtn.addEventListener('click',(e)=>{
        document.getElementById('amount').value=obj.amount
        document.getElementById('desc').value=obj.description
        document.getElementById('category').value=obj.category
        localStorage.removeItem(obj.description)
        newlist.remove()
    })
}