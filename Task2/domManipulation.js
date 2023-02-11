const box = document.getElementById("box")
const color = document.getElementById("colour")
const removechild = document.getElementById("removeChild")
let c=0;
color.addEventListener("click",()=>{
    c=c+1;
    box.style.backgroundColor = `rgba(180,255,${5*c},${0.1*c})`
})
const child = document.getElementById("addChild");
const styles = "border:2px solid orange;width: 50px;height:50px;margin:auto"
const childBox = document.createElement("div");
child.addEventListener("click",()=>{
    
    childBox.setAttribute("style",styles)
    box.appendChild(childBox)
})
removechild.addEventListener("click",()=>{
    childBox.removeAttribute("style",styles)
})
