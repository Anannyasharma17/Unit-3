let Key = "75b4deaaed93244bc6d514ed7bbaf79a";

async function getWeatherData(){

    try{
        
     let city = document.getElementById("input").value;
     //  let city = "pune"
 
 
     let res_single = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric&sys=unix`);
     let res_seven = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${Key}&units=metric`)
 
 
     let data_single = await res_single.json();
     let data_seven = await res_seven.json();
     document.querySelector("#gmap_canvas").setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
 
     console.log(data_single)
 
     single_data(data_single);
     seven_data(data_seven);
    }

    catch(err){
        console.log(err);
    }

}

function single_data(x){

       document.getElementById("tem").innerHTML = null;
       document.getElementById("tem_max").innerHTML = null;
       document.getElementById("tem_min").innerHTML = null;
       document.getElementById("human").innerHTML = null;
       document.getElementById("sunrise").innerHTML = null;
       document.getElementById("sunset").innerHTML = null;
       document.getElementById("press").innerHTML = null;
       document.getElementById("wind").innerHTML = null;

       var arr_image = ["/img/hot.png", "/img/high-temperature.png" , "/img/low-temperature.png" , "/img/humidity.png" , "/img/sunrise.png" , "/img/sunset.png" , "/img/meter.png" , "/img/wind.png"]



    let tem = document.getElementById("tem");
    let h1 = document.createElement("h1")
    h1.textContent = "Temp" 
    let img1 = document.createElement("img")
    img1.setAttribute("src", arr_image[0])
    let p1 = document.createElement("p")
    p1.textContent = `${x.main.temp}°C`
    tem.append(h1, img1, p1)


    let tem_min = document.getElementById("tem_max");
    let h2 = document.createElement("h1")
    h2.textContent = "Min" 
    let img2 = document.createElement("img")
    img2.setAttribute("src", arr_image[1])
    let p2 = document.createElement("p")
    p2.textContent = `${x.main.temp_min}°C`
    tem_min.append(h2, img2, p2)

    let tem_max = document.getElementById("tem_min");
    let h3 = document.createElement("h1")
    h3.textContent = "Max"
    let img3 = document.createElement("img")
    img3.setAttribute("src", arr_image[2]) 
    let p3 = document.createElement("p")
    p3.textContent = `${x.main.temp_max}°C`
    tem_max.append(h3, img3, p3)

    let human = document.getElementById("human");
    let h4 = document.createElement("h1")
    h4.textContent = "Humidity" 
    let img4 = document.createElement("img")
    img4.setAttribute("src", arr_image[3])
    let p4 = document.createElement("p")
    p4.textContent = `${x.main.humidity}%rh`
    human.append(h4, img4, p4)

    let sunrise = document.getElementById("sunrise");
    let h5 = document.createElement("h1")
    h5.textContent = "Sunrise" 
    let img5 = document.createElement("img")
    img5.setAttribute("src", arr_image[4])
    let p5 = document.createElement("p")
    p5.textContent = `${x.sys.sunrise}`
    sunrise.append(h5, img5, p5)

    let sunset = document.getElementById("sunset");
    let h6 = document.createElement("h1")
    h6.textContent = "Sunset" 
    let img6 = document.createElement("img")
    img6.setAttribute("src", arr_image[5])
    let p6 = document.createElement("p")
    p6.textContent = `${x.sys.sunset}`
    sunset.append(h6, img6, p6)

    let press = document.getElementById("press");
    let h7 = document.createElement("h1")
    h7.textContent = "Pressure" 
    let img7 = document.createElement("img")
    img7.setAttribute("src", arr_image[6])
    let p7 = document.createElement("p")
    p7.textContent = `${x.main.pressure}millibars`
    press.append(h7, img7, p7)

    let wind = document.getElementById("wind");
    let h8 = document.createElement("h1")
    h8.textContent = "Wind" 
    let img8 = document.createElement("img")
    img8.setAttribute("src", arr_image[7])
    let p8 = document.createElement("p")
    p8.textContent = `${x.wind.speed}kmph`
    wind.append(h8, img8, p8)

}


function seven_data(y){

    document.querySelector("#container").innerHTML = null;

    let arr = y.list;

    let arr_icon = ["cloud.png", "cloudy (1).png" , "cloudy (2).png" , "cloudy-day.png" , "cloudy.png" , "rainy-day.png" , "sun.png" ]

    //  console.log(arr);

    arr.map (function (items, index){



        let div = document.createElement("div");

        let Day = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = document.createElement("p");
        day.textContent = Day[index];

        let img = document.createElement("img");
        img.setAttribute("src", arr_icon[index]);

        let minitemp = document.createElement("p");
        minitemp.textContent = items.main.temp_min

        let maxtemp = document.createElement("p");
        maxtemp.textContent = items.main.temp_max

        div.append(day, img, minitemp, maxtemp);


        document.querySelector("#container").append(div);

    })

}

//  getWeatherData()






////////////////////////////////////////////////////////////////////////////////////////////////////






async function getWeatherDataPune(){

   try{
        // let city = document.getElementById("input").value;
    let city = "pune"


    let res_single = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric&sys=unix`);
    let res_seven = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${Key}&units=metric`)
 
 
    let data_single = await res_single.json();
    let data_seven = await res_seven.json();
    document.querySelector("#gmap_canvas").setAttribute("src", `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
    
 //    console.log(data_single)
 
    single_dataPune(data_single);
    seven_dataPune(data_seven);
 
   }
   catch(err){
       console.log(err)
   }
}

function single_dataPune(x){
    document.getElementById("tem").innerHTML = null;
    document.getElementById("tem_max").innerHTML = null;
    document.getElementById("tem_min").innerHTML = null;
    document.getElementById("human").innerHTML = null;
    document.getElementById("sunrise").innerHTML = null;
    document.getElementById("sunset").innerHTML = null;
    document.getElementById("press").innerHTML = null;
    document.getElementById("wind").innerHTML = null;

    var arr_image = ["/img/hot.png", "/img/high-temperature.png" , "/img/low-temperature.png" , "/img/humidity.png" , "/img/sunrise.png" , "/img/sunset.png" , "/img/meter.png" , "/img/wind.png"]



    let tem = document.getElementById("tem");
    let h1 = document.createElement("h1")
    h1.textContent = "Temp" 
    let img1 = document.createElement("img")
    img1.setAttribute("src", arr_image[0])
    let p1 = document.createElement("p")
    p1.textContent = `${x.main.temp}°C`
    tem.append(h1, img1, p1)


    let tem_min = document.getElementById("tem_max");
    let h2 = document.createElement("h1")
    h2.textContent = "Min" 
    let img2 = document.createElement("img")
    img2.setAttribute("src", arr_image[1])
    let p2 = document.createElement("p")
    p2.textContent = `${x.main.temp_min}°C`
    tem_min.append(h2, img2, p2)

    let tem_max = document.getElementById("tem_min");
    let h3 = document.createElement("h1")
    h3.textContent = "Max"
    let img3 = document.createElement("img")
    img3.setAttribute("src", arr_image[2]) 
    let p3 = document.createElement("p")
    p3.textContent = `${x.main.temp_max}°C`
    tem_max.append(h3, img3, p3)

    let human = document.getElementById("human");
    let h4 = document.createElement("h1")
    h4.textContent = "Humidity" 
    let img4 = document.createElement("img")
    img4.setAttribute("src", arr_image[3])
    let p4 = document.createElement("p")
    p4.textContent = `${x.main.humidity}%rh`
    human.append(h4, img4, p4)

    let sunrise = document.getElementById("sunrise");
    let h5 = document.createElement("h1")
    h5.textContent = "Sunrise" 
    let img5 = document.createElement("img")
    img5.setAttribute("src", arr_image[4])
    let p5 = document.createElement("p")
    p5.textContent = `${x.sys.sunrise}`
    sunrise.append(h5, img5, p5)

    let sunset = document.getElementById("sunset");
    let h6 = document.createElement("h1")
    h6.textContent = "Sunset" 
    let img6 = document.createElement("img")
    img6.setAttribute("src", arr_image[5])
    let p6 = document.createElement("p")
    p6.textContent = `${x.sys.sunset}`
    sunset.append(h6, img6, p6)

    let press = document.getElementById("press");
    let h7 = document.createElement("h1")
    h7.textContent = "Pressure" 
    let img7 = document.createElement("img")
    img7.setAttribute("src", arr_image[6])
    let p7 = document.createElement("p")
    p7.textContent = `${x.main.pressure}millibars`
    press.append(h7, img7, p7)

    let wind = document.getElementById("wind");
    let h8 = document.createElement("h1")
    h8.textContent = "Wind" 
    let img8 = document.createElement("img")
    img8.setAttribute("src", arr_image[7])
    let p8 = document.createElement("p")
    p8.textContent = `${x.wind.speed}kmph`
    wind.append(h8, img8, p8)


}


function seven_dataPune(y){

   document.querySelector("#container").innerHTML = null;

   let arr_icon = ["cloud.png", "cloudy (1).png" , "cloudy (2).png" , "cloudy-day.png" , "cloudy.png" , "rainy-day.png" , "sun.png" ]


   let arr = y.list;
   //  console.log(arr);

   arr.map (function (items, index){



       let div = document.createElement("div");

       let Day = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       let day = document.createElement("p");
       day.textContent = Day[index];

        let img = document.createElement("img");
        img.setAttribute("src", arr_icon[index]);

       let minitemp = document.createElement("p");
       minitemp.textContent = items.main.temp_min

       let maxtemp = document.createElement("p");
       maxtemp.textContent = items.main.temp_max

       div.append(day, img, minitemp, maxtemp);


       document.querySelector("#container").append(div);

   })

}

getWeatherDataPune()








