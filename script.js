
const city = document.getElementById("city")
const btn = document.getElementById("get-location")

const cityName = document.getElementById("ctname")
const cityTime = document.getElementById("cttime")
const cityTemp = document.getElementById("cttemp")

async function getData(cityName){  //async tells there is something that'll take time but let's keep moving.
    const promi = await fetch(      //await pauses the execition of functn till promise arrives.
        `http://api.weatherapi.com/v1/current.json?key=ab83a319ff5448c6801181011242404&q=${cityName}&aqi=yes`
    );    //fetch makes http request| promise is the reply from server
    return await promi.json();   //return specifies the value of the promise(reply)
}

btn.addEventListener("click", async ()=>{
    const cityVal = city.value;
    const rlt = await getData(cityVal)
    cityName.innerText = `${rlt.location.name}, ${rlt.location.region} - ${rlt.location.country}`;
    cityTime.innerText = rlt.location.localtime;
    cityTemp.innerText = rlt.current.temp_c + ' °C';
    
}) 






// http://api.weatherapi.com/v1/current.json?key=ab83a319ff5448c6801181011242404&q=London&aqi=yes