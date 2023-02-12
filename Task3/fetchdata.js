const search = document.getElementById("search")
const searchTitle = document.getElementById("searchTitle")
let data=[];
const title = document.getElementById("title");
const released = document.getElementById("released");
const actors = document.getElementById("actors");
const rating = document.getElementById("rating");
const image = document.getElementById("image")
searchTitle.addEventListener("click",async ()=>{
    const Data = document.getElementById("data");
    try{
        if(search.value!=""){
        let Titlename = search.value
        await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=cee0ffe7&t=${Titlename}`).then((res)=>{return res.json()})
    .then((userdata)=>{
        data.push({"Title":userdata.Title})
        data.push({"Released":userdata.Released})
        data.push({"imdbRating":userdata.imdbRating})
        data.push({"Actors":userdata.Actors})
        data.push({"Image":userdata.Poster})
    })
    

    
    //let element="";
    for(let i=0;i<data.length;i++){
    //const child = document.createElement("p");
    if(data[i].Title){
        title.innerHTML=`<br><div>Title :${data[i].Title}</div><br>`
    }else if(data[i].Released){
         released.innerHTML=`<div>Released Date :${data[i].Released}</div><br>`   
    }else if(data[i].imdbRating){
        rating.innerHTML=`<div>IMDB Rating :${data[i].imdbRating}</div><br>`
    }  
    else if(data[i].Actors){
        actors.innerHTML=`<div>Actors :${data[i].Actors}</div><br>`
    }else if(data[i].Image){
        image.innerHTML=`<img src=${data[i].Image}/>`
    }
    }    
    }
}catch(err){
        console.log(err.message)
    }
    search.value=""
})