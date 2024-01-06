function storeDetails(event){
    event.preventDefault()

    const item=document.getElementById('item').value
    const desc=document.getElementById('desc').value
    const price=document.getElementById('price').value
    const quantity=document.getElementById('quantity').value

    const itemObj={
        item:item,
        description:desc,
        price:price,
        quantity:quantity
    }
    console.log(itemObj)
    axios.post('https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails',itemObj)
    .then(res=> {
        console.log(res.data)
        showData(res.data)
    })
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails')
    .then(res=>{
        // console.log(res)
        for(let i=0;i<res.data.length;i++){
            showData(res.data[i])
           }
    })
})

function showData(obj){

    const ul=document.querySelector('ul')

    const li=document.createElement('li')
    li.innerHTML=`${obj.item} ${obj.description} ${obj.price} ${obj.quantity} `
    ul.appendChild(li)

    const btn1=document.createElement('button')
    btn1.innerText='Add One'
    const btn2=document.createElement('button')
    btn2.innerText='Add Two'
    const btn3=document.createElement('button')
    btn3.innerText='Add Three'

    li.appendChild(btn1)
    btn1.addEventListener('click',()=>{
        console.log('quantity updated')
        axios.get(`https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails/${obj._id}`)
        .then(res=>{
            let currItem=res.data
            let updatedQuantity=currItem.quantity-1
            currItem.quantity=updatedQuantity
            showData(currItem)
            li.remove()
            axios.put(`https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails/${obj._id}`,{item:currItem.item, description:currItem.description, price:currItem.price, quantity:updatedQuantity})
           })
    })
    li.appendChild(btn2)
    btn2.addEventListener('click',()=>{
        console.log('quantity updated')
        axios.get(`https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails/${obj._id}`)
        .then(res=>{
            let currItem=res.data
            let updatedQuantity=currItem.quantity-2
            currItem.quantity=updatedQuantity
            showData(currItem)
            li.remove()
            axios.put(`https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails/${obj._id}`,{item:currItem.item, description:currItem.description, price:currItem.price, quantity:updatedQuantity})
           })
    })
    li.appendChild(btn3)
    btn3.addEventListener('click',()=>{
        console.log('quantity updated')
        axios.get(`https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails/${obj._id}`)
        .then(res=>{
            let currItem=res.data
            let updatedQuantity=currItem.quantity-3
            currItem.quantity=updatedQuantity
            showData(currItem)
            li.remove()
            axios.put(`https://crudcrud.com/api/ce4d792e5eff4c31bb28133db7044be5/itemDetails/${obj._id}`,{item:currItem.item, description:currItem.description, price:currItem.price, quantity:updatedQuantity})
           })
    })
}