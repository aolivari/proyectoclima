
console.log("hola mundo");
//div righ
let button = document.body.querySelector("#button");
let city = document.body.querySelector("#bbusqueda");
let country = document.body.querySelector("#bbusqueda2");
//div central
let map = document.body.querySelector("#map");
//div left
let Pico = document.body.querySelector("#icoeltiempo");
let pcity = document.body.querySelector("#pleft h1");
let ppronostico = document.body.querySelector("#pleft p");
let ptemp = document.body.querySelector("#pleft h2");

let key = "5389f4117e374e8db7e5f6ea1684465a"


let country2 = "ES" //hay que cambiar esto mas adelante
pcity.innerText = "barcelona"//ciudad de prueba


let url = new URL ("http://api.weatherbit.io/v2.0/current")
url.searchParams.set("key",key)
url.searchParams.set("city", pcity.innerText)
url.searchParams.set("country", country2)
url.searchParams.set("lang", "es")
let IconAddress = "https://www.weatherbit.io/static/img/icons/"


fetch(url)
  .then(response => response.json())
  .then(json => {
       ptemp.innerText = json.data[0].temp
       ppronostico.innerText = json.data[0].weather.description
       Pico.src = IconAddress + json.data[0].weather.icon+".png"
    })







