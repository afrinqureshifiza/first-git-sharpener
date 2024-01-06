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
    axios.post('https://crudcrud.com/api/618b2dd5595a422ab1a3601274307c82/itemDetails',itemObj)
    .then(res=> {
        console.log(res.data)
        showData(res.data)
    })
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/618b2dd5595a422ab1a3601274307c82/itemDetails')
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
        axios.get(`https://crudcrud.com/api/618b2dd5595a422ab1a3601274307c82/itemDetails/${obj._id}`)
        .then(res=>{
            console.log(res.data)
            let updatedQuantity=res.data.quantity-1
            axios.put(`https://crudcrud.com/api/618b2dd5595a422ab1a3601274307c82/itemDetails/${obj._id}`,{item:res.data.item, description:res.data.description, price:res.data.price, quantity:updatedQuantity})
            .then(updatedres=>{
                
                console.log(updatedres)
                obj=updatedres
                console.log(obj)
            })
           })
    })
    li.appendChild(btn2)
    li.appendChild(btn3)
}