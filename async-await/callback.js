let posts=[
    {title:'post1', body:'this is post 1'},
    {title:'post2', body:'this is post 2'},
]

function getPost(){
    
    setTimeout(()=>{
       let output=''
       let i=0
       console.log('a')
       posts.forEach(post => {
         output+=`<li>${post.title} ${i++}</li>`
         console.log(i)
         document.body.innerHTML=output
         })
        
    },1000)
    
}

function createPost(post,callback){
    setTimeout(()=>{
     posts.push(post)
     callback()
    },2000)
}

createPost({title:'post3', body:'this is post 3'},getPost)
