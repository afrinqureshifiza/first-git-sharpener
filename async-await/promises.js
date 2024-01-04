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

function createPost(post){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     posts.push(post)
    //  console.log('a')
     resolve()
    },1000)   
    }) 
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         let currtime=new Date().toLocaleTimeString()
         resolve(currtime)
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         let post=posts.pop()
         resolve(post)
        },1000)
    })
}

createPost({title:'post3', body:'this is post 3'}).then(()=>{
    let currpost=posts
    console.log('posts => ',currpost)
    return updateLastUserActivityTime()
    
    }).then((time)=>{
    console.log('User last activity time is ',time)
    return deletePost()

    }).then((post)=>{
        console.log('post deleted => ',post)
        console.log('remaning posts => ',posts)
    })




// let pro1=Promise.resolve('hello world')
// let pro2=10
// let pro3=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     resolve('goodbye')
//    },2000) 
// })
// Promise.all([pro1,pro2,pro3]).then(val=>console.log(val))
