// let third=document.getElementById("third");
// third.style.backgroundColor="green";

// let listItem=document.getElementById("items");
// listItem.style.fontWeight="bold";

// let list=document.getElementsByTagName('li');
// list[4].style.border="black"

// let itemsecond=document.querySelector('.list-group-item:nth-child(2)');
// itemsecond.style.color='green';
// let item=document.querySelectorAll('.list-group-item');
// // item[1].style.color="green";
// item[0].style.backgroundColor="green"
// item[2].style.backgroundColor="green"

// let item=document.querySelector('#items');
// console.log(item.parentElement.parentElement.parentElement.parentElement.parentElement)
// item.parentElement.style.backgroundColor="yellow"

// console.log(item.children)
// console.log(item.firstChild)
// console.log(item.lastChild)
// console.log(item.firstElementChild)
// item.firstElementChild.textContent="hello"
// item.lastElementChild.textContent="bye"
// console.log(item.nextElementSibling)
// console.log(item.previousElementSibling)
// let newdiv=document.createElement("div")
// newdiv.className='hello'
// newdiv.id='hello'
// newdiv.setAttribute('title','hello div')
// // newdiv.textContent='inside new div'
// let text=document.createTextNode('text element');
// newdiv.appendChild(text)
// console.log(newdiv)
// // document.body.appendChild(newdiv)

// let container=document.querySelector('header .container')
// let h1=document.querySelector('header h1')
// console.log(h1)
// container.insertBefore(newdiv, h1)
// let item1=document.querySelector('li')
// item.insertBefore(newdiv,item1)


//delete button
let form=document.getElementById('addform');
let itemlist=document.getElementById('items');
 
//form submit event
form.addEventListener('submit',additem);

//delete event
// let delitem=document.getElementsByClassName('btn')
// delitem.addEventListener('click',deleteitem)
itemlist.addEventListener('click',deleteitem)

function deleteitem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('are you sure?')){
    let li=e.target.parentElement;
   itemlist.removeChild(li) 
 }  
    }
 
}

function additem(event){
  event.preventDefault();
  console.log(1);
  //get input value
let newitem =document.getElementById('item').value

//create new li element
let li=document.createElement('li')
let btn=document.createElement('button') 
btn.className='btn float-right btn-danger btn-sm delete'
btn.textContent='X'
li.className='list-group-item'
// li.appendChild(document.createTextNode(newitem))
li.textContent=newitem
li.appendChild(btn)
itemlist.appendChild(li);
}


