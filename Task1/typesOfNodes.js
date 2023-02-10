const nodesList = document.body.childNodes;
console.log(nodesList)
const nodes = document.getElementById("nodes");
// let text = "";
for(let i=0;i<nodesList.length;i++){
    nodes.innerHTML+=nodesList[i].nodeName + "<br>"
}

const element = document.getElementById("element");
const elementvalue = document.getElementById("nodetypeElement")
elementvalue.innerText = `The node value for the element node is ${element.nodeType}`
document.getElementById("nodetypeText").innerText = `The node value for the Text node is ${nodesList[2].nodeType}`
document.getElementById("nodetypeComment").innerText = `The node value for the element node is ${nodesList[3].nodeType}`
console.log(element.nodeType)
console.log(nodesList[2].nodeType)
console.log(nodesList[3].nodeType)