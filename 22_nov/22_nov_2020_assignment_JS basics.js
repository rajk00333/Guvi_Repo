/* 

***************** 22-NOV-ASSIGNMENT *****************

Solving problems using array functions on rest countries data.
    1. Get all the countries from Asia continent using Filter function
    2. Get all the countries with population of less than 2 lacs using Filter function
    3. Print the following details name, capital, flag using forEach function
    4. Print the total population of countries using reduce function
    5. Print the total population of countries in Asia continent using reduce and filter function
    6. Print the country which use US Dollars as currency.
    7. Add error handling to the xml http request code
*/

//     1. Get all the countries from Asia continent using Filter function
try{
var request =  new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send()
var data;
request.onload = function (){
// data variable contains JSON
data = JSON.parse(this.response)
console.log(data)
const ASIAN_CONTINETS_DATA = data.filter((json_data)=>{
    return json_data.region === "Asia"
})
console.log("All the countries from Asia continent using Filter function")
console.log(ASIAN_CONTINETS_DATA)

//     2. Get all the countries with population of less than 2 lacs using Filter function

const POPULATION_LESS_THAN_2_LACS = data.filter((json_data)=>{
    return json_data.population < 200000
})
console.log("All the countries with population of less than 2 lacs using Filter function")
console.log(POPULATION_LESS_THAN_2_LACS)



// 4. Print the total population of countries using reduce function

total_population_reduce_method = data.reduce((current_population, json_data)=>{
    return current_population + json_data.population
}, 0)
console.log('Total Population: ' +total_population_reduce_method)


//  5. Print the total population of countries in Asia continent using reduce and filter function

const asia_continents_data = data.filter((json_data)=>{
    if(json_data.region ==='Asia'){
        return json_data
    }
})
total_population_of_asian_continents = asia_continents_data.reduce((current_population, json_data)=>{
    return current_population + json_data.population
}, 0)
console.log('Total Population of Asian continents: ' +total_population_of_asian_continents)


//     6. Print the country which use US Dollars as currency.


var countries_using_dollars_as_currency=[]
data.filter((json_data)=>{
    json_data.currencies.filter((i)=>{
        if(i.code==='USD'){
            countries_using_dollars_as_currency.push(json_data)
        }
    })    
})
console.log('Countries which uses US Dollars as currency: ')
console.log(countries_using_dollars_as_currency)

// 3. Print the following details name, capital, flag using forEach function

data.forEach(element => {
    console.log('Name: '+ element.name, '   Capital: '+element.capital, '     Flag: '+element.flag )    
});

alert('Assigment done, Kindly check console for the output')
}
}
catch (err){
    console.log('Error: ' +err.message)
}

