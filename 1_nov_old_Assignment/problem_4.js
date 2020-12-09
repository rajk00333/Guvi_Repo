function transformFirstAndLast(object) {
    dict = {}
    length = object.length
    dict[object[0]]= object[length-1]
    return dict;
}

var array = ["GUVI", "I", "am", "Geek"];
console.log(transformFirstAndLast(array))
