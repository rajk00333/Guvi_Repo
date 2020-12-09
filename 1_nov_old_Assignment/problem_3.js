function convertObjectToList(object) {
    key_array = []
    for (const value of Object.entries(object)) {
        key_array.push(value)
    }
    return key_array;
}

var object = { name: "ISRO", age: 35, role: "Scientist" };
console.log(convertObjectToList(object))
