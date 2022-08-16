const URL = "https://api.openweathermap.org/data/2.5/weather?q=Rosario,AR&appid=2e27cbb96a03eb964353fcc5812f7072&units=metric&lang=sp";

async function mostarClima() {
let respuesta = await fetch(URL);
let clima = await respuesta.json();
ver_clima.innerHTML = `${clima.name},  ${clima.main.temp}° con ${clima.weather[0].description} !!!MUUYY OCHENTOSOOO!!!` ;
}
mostarClima ();