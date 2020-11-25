const items = [
    {
        name: 'bike',
        price: 100
    },
    {
        name: 'book',
        price: 200
    },
    {
        name: 'pen',
        price: 500
    },
    {
        name: 'keyboard',
        price: 1000
    },
    {
        name: 'ps',
        price: 250
    },
    {
        name: 'bag',
        price: 700
    },
    {
        name: 'dress',
        price: 800
    }
]

console.log(items) 
// map method
mapfilter = items.map((item)=>
    {
        return item.price+=100 
    }
)

console.log(items) 
console.log(mapfilter) 
/// Filter methods
filtermethod = items.find((item)=>
    {
        return item.price == 1100
    }
)
console.log(filtermethod) 


// FOREACH convert to upper case

items.forEach((item)=>{
    console.log(item.name.toUpperCase())
})

// SOME METHOD in array
some_method = items.some((item)=>{
    return item.name ==="book"
})

console.log(some_method)

//every method
every_method = items.every((item)=>{
    return item.price > 100
})

// console.log(every_method)


// reduce
console.log("reduce_method")
reduce_method = items.reduce((currentvalue, item)=>{
    return currentvalue + item.price 
},0)

console.log(reduce_method)


// includes
console.log("includes")
console.log(items)
console.log(items.includes({name: "dress", price: 900}))
console.log(items.includes({name: "dress", price: 800}))