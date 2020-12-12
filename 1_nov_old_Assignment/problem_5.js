function fromListToObject(object) {
    var dict = {}
    object.forEach((arr_element) => {
        dict[arr_element[0]] = arr_element[1]
    })
    return dict
}

var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
console.log(fromListToObject(array))
