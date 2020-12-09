function printAllValues(object) {
    values_array =[]
    for (const [key, value] of Object.entries(object)) {
        values_array.push(value)
    }
    return values_array;
}

var object = { name: "RajiniKanth", age: 33, hasPets: false };
console.log(printAllValues(object))
