//div righ
let button = document.body.querySelector("#button");
let city = document.body.querySelector("#bbusqueda");
let country = document.body.querySelector("#bbusqueda2");
//div central
// let map = document.body.querySelector("#map");
//div left
let Pico = document.body.querySelector("#icoeltiempo");
let pcity = document.body.querySelector("#pleft h1");
let ppronostico = document.body.querySelector("#pronostico");
let ptemp = document.body.querySelector("#pleft h2");
let pcountry = document.body.querySelector("#flota");
let gps = [2.16992,41.3879]//longitud;latitud
let key = "5389f4117e374e8db7e5f6ea1684465a"

button.addEventListener('click',event=>{
  event.preventDefault()
  pcity.innerText = city.value
  pcountry.innerText = country.value
  buscaClima()
 
})


function buscaClima(){
  let url = new URL ("http://api.weatherbit.io/v2.0/current")
  url.searchParams.set("key",key)
  url.searchParams.set("city", pcity.innerText)
  url.searchParams.set("country", pcountry.innerText)
  url.searchParams.set("lang", "es")
  let IconAddress = "https://www.weatherbit.io/static/img/icons/"
  fetch(url)
  .then(response => response.json())
  .then(json => {
     ptemp.innerText = json.data[0].temp+'º'
     ppronostico.innerText = json.data[0].weather.description
     Pico.src = IconAddress + json.data[0].weather.icon+".png"
     gps[1]=json.data[0].lat
     gps[0]=json.data[0].lon
     
     
  })
  .then(function(){
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: gps,
      zoom: 8
    });


   // Create a default Marker, colored black, rotated 45 degrees. marker 1
    var marker = new mapboxgl.Marker({ color: 'black', rotation: 45 })
    .setLngLat(gps)//esta linea hay que intervenirla
    .addTo(map);  

  })
  .catch(error=>{
    alert("La busqueda no arrojó ningún resultado, vuelve a intentarlo")
  })
}



//mapa


mapboxgl.accessToken = 'pk.eyJ1IjoiYmxhYmFib3NvMzQiLCJhIjoiY2tuejIxZDc0MDFraDJvbXZwdTJ2YWhuNCJ9.r5WmNFozOL_j0b2Y40EmZw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: gps,
    zoom: 8
});


// // Create a default Marker, colored black, rotated 45 degrees. marker 1
// var marker = new mapboxgl.Marker({ color: 'black', rotation: 45 })
//     .setLngLat(gps)//esta linea hay que intervenirla
//     .addTo(map);

   
