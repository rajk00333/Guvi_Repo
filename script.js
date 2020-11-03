// create a request variable
var request =  new XMLHttpRequest();

//open the request
// default method will be get
// 3 parameters-> type, url, async
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

// send the request
request.send()
// load the response

request.onload = function (){
    var data = JSON.parse(this.response)
    // console.log(data)
    for (i=0; i < data.length; i ++){
        console.log(data[i].flag)
        // image = data[i].flag;
}
}