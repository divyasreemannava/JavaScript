const search = document.getElementById("search")
const searchTitle = document.getElementById("searchTitle")
let data=[];
searchTitle.addEventListener("click",async ()=>{
    try{
        if(search.value!=""){
        let Titlename = search.value
        await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=cee0ffe7&t=${Titlename}`).then((res)=>{return res.json()})
    .then((userdata)=>{
        data.push({"Title":userdata.Title})
        data.push({"Released":userdata.Released})
        data.push({"imdbRating":userdata.imdbRating})
        data.push({"Actors":userdata.Actors})
    })

    const Data = document.getElementById("data");
    let element="";
    for(let i=0;i<data.length;i++){
    const child = document.createElement("p");
    if(data[i].Title){
        element+=`<br><div>Title :${data[i].Title}</div><br>`
    }else if(data[i].Released){
         element+=`<div>Released Date :${data[i].Released}</div><br>`   
    }else if(data[i].imdbRating){
        element+=`<div>IMDB Rating :${data[i].imdbRating}</div><br>`
    }  
    else if(data[i].Actors){
        element+=`<div>Actors :${data[i].Actors}</div><br>`
    }
    }
    Data.innerHTML = element
    
    }
}catch(err){
        console.log(err.message)
    }
    search.value=""
})