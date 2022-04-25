
let getData = async (url)=>{

    try{
        let res = await fetch(url);

        let data = await res.json();
        // display(data.results);
        return data.results;
    }
    catch(error){
        console.log(error)
    }
}

let display = (x, parent) => { 
    parent.innerHTML = "";
   x.map ((items) => {
        // console.log(items)

    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", items.urls.regular)

    let h3 = document.createElement("h3");
    h3.textContent = items.alt_description;

    div.append(img, h3);

    parent.append(div);

   })
}


export {getData, display};
