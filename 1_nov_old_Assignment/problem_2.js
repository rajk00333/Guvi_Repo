function printAllValues(object) {
    key_array =[]
    for (const [key, value] of Object.entries(object)) {
        key_array.push(key)
    }
    return key_array;
}

var object = { name: "RajiniKanth", age: 33, hasPets: false };
console.log(printAllValues(object))
