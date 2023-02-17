const list = document.getElementById("list")
const next = document.getElementById("load_next")
const page = document.getElementById("page")
const prev = document.getElementById("load_prev")
let currentpage = 1;
fetch("https://api.github.com/repositories/1296269/issues?page=1&per_page=5")
.then((res)=>{return res.json()})
.then((data)=>{
    page.innerText = `Current Page : ${currentpage}`
    for(let i=0;i<data.length;i++){
        const li = document.createElement("li");
        li.innerText=data[i].title
        list.appendChild(li)
    }
    
})
next.addEventListener("click",()=>{
    currentpage+=1
    
    fetch(`https://api.github.com/repositories/1296269/issues?page=${currentpage}&per_page=5`)
.then((res)=>{return res.json()})
.then((data)=>{
    list.innerHTML=""
    for(let i=0;i<data.length;i++){
        page.innerText = `Current Page : ${currentpage}`
        const li = document.createElement("li");
        li.innerText = data[i].title
        list.appendChild(li)
    }
})
})
prev.addEventListener("click",()=>{
    currentpage-=1

    if(currentpage<=0){
        currentpage=1
        alert("You cannot proceed to previous page")
    }else{
        fetch(`https://api.github.com/repositories/1296269/issues?page=${currentpage}&per_page=5`)
        .then((res)=>{return res.json()})
        .then((data)=>{
        page.innerText = `${currentpage}`
        list.innerHTML=""
        for(let i=0;i<data.length;i++){
            page.innerText = `Current Page : ${currentpage}`
            const li = document.createElement("li");
            li.innerText = data[i].title
            list.appendChild(li)
        }
        })
    }
})

