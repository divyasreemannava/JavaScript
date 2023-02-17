const restart = document.getElementById("restart");
restart.addEventListener("click",()=>{
    // location.reload();
    b1.innerText=""
    b2.innerText=""
    b3.innerText=""
    b4.innerText=""
    b5.innerText=""
    b6.innerText=""
    b7.innerText=""
    b8.innerText=""
    b9.innerText=""
    flag=0
})


const b1 = document.getElementById("1");
const b2 = document.getElementById("2")
const b3 = document.getElementById("3")
const b4 = document.getElementById("4")
const b5 = document.getElementById("5")
const b6 = document.getElementById("6")
const b7 = document.getElementById("7")
const b8 = document.getElementById("8")
const b9 = document.getElementById("9")
let flag =0;
b1.addEventListener("click",()=>{
    if(b1.innerText=="X"||b1.innerText=="O"){
        b1.removeEventListener("click")
    }
    if(flag==0){
        flag = 1
        b1.innerText = "X"
    }else{
        flag = 0;
        b1.innerText = "O"
    }
})
b2.addEventListener("click",()=>{
    if(b2.innerText=="X"||b2.innerText=="O"){
        b2.removeEventListener("click")
    }
    if(flag==0){
        b2.innerText = "X"
        flag = 1
    }else{
        b2.innerText = "O"
        flag = 0;
    }
})
b3.addEventListener("click",()=>{
    if(b3.innerText=="X"||b3.innerText=="O"){
        b3.removeEventListener("click")
    }
    if(flag==0){
        b3.innerText = "X"
        flag = 1
    }else{
        b3.innerText = "O"
        flag = 0;
    }
})
b4.addEventListener("click",()=>{
    if(b4.innerText=="X"||b4.innerText=="O"){
        b4.removeEventListener("click")
    }
    if(flag==0){
        b4.innerText = "X"
        flag = 1
    }else{
        b4.innerText = "O"
        flag = 0;
    }
})
b5.addEventListener("click",()=>{
    if(b5.innerText=="X"||b5.innerText=="O"){
        b5.removeEventListener("click")
    }
    if(flag==0){
        b5.innerText = "X"
        flag = 1
    }else{
        b5.innerText = "O"
        flag = 0;
    }
})
b6.addEventListener("click",()=>{
    if(b6.innerText=="X"||b6.innerText=="O"){
        b6.removeEventListener("click")
    }
    if(flag==0){
        b6.innerText = "X"
        flag = 1
    }else{
        b6.innerText = "O"
        flag = 0;
    }
})
b7.addEventListener("click",()=>{
    if(b7.innerText=="X"||b7.innerText=="O"){
        b7.removeEventListener("click")
    }
    if(flag==0){
        b7.innerText = "X"
        flag = 1
    }else{
        b7.innerText = "O"
        flag = 0;
    }
})
b8.addEventListener("click",()=>{
    if(b8.innerText=="X"||b8.innerText=="O"){
        b8.removeEventListener("click")
    }
    if(flag==0){
        b8.innerText = "X"
        flag = 1
    }else{
        b8.innerText = "O"
        flag = 0;
    }
})
b9.addEventListener("click",()=>{
    if(b9.innerText=="X"||b9.innerText=="O"){
        b9.removeEventListener("click")
    }
    if(flag==0){
        b9.innerText = "X"
        flag = 1
    }else{
        b9.innerText = "O"
        flag = 0;
    }
})

