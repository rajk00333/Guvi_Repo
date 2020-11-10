// create a request variable
var request =  new XMLHttpRequest();
// var axios =  new XMLHttpRequest();


//open the request
// default method will be get
// 3 parameters-> type, url, async
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

// send the request
request.send()
// load the response

request.onload = function (){
    var data = JSON.parse(this.response)
    console.log(data[0])

// usign city name
var city = data[0]["name"]
console.log(city)
var api_key = "60a64cd181f81dea012e63c21671f033"
weather_base_url = "http://api.openweathermap.org/data/2.5/weather?q="
weather_api = weather_base_url + city + "&appid=" + api_key

var weatherHttp = new XMLHttpRequest();
weatherHttp.open("GET",weather_api, true)
weatherHttp.send();
console.log(weatherHttp.responseText)
weatherHttp.onload = function(){
        var weather_Data = JSON.parse(this.response)
        console.log(weather_Data)
}
// usign city id
var id = data[0]["area"]
console.log(id)
var api_key = "60a64cd181f81dea012e63c21671f033"
weather_base_url = "http://api.openweathermap.org/data/2.5/weather?id="
weather_api = weather_base_url + id + "&appid=" + api_key

var weatherHttp = new XMLHttpRequest();
weatherHttp.open("GET",weather_api, true)
weatherHttp.send();
console.log(weatherHttp.responseText)
weatherHttp.onload = function(){
        var weather_Data = JSON.parse(this.response)
        console.log(weather_Data)
}

// usign city lat & lan
var lat = data[0]["latlng"][0]
var lon = data[0]["latlng"][1]
console.log(lat)
console.log(lon)
var api_key = "60a64cd181f81dea012e63c21671f033"
weather_base_url = "http://api.openweathermap.org/data/2.5/weather?lat="
weather_api = weather_base_url + lat + "&lon="+lon+"&appid=" + api_key

var weatherHttp = new XMLHttpRequest();
weatherHttp.open("GET",weather_api, true)
weatherHttp.send();
console.log(weatherHttp.responseText)
weatherHttp.onload = function(){
        var weather_Data = JSON.parse(this.response)
        console.log(weather_Data)
}
}