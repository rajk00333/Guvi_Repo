function transformGeekData(object) {
    var TRANSFORM_GEEK_DATA = []
    object.forEach((arr_element) => {
        var dict = {}
        arr_element.forEach((data)=>{
            dict[data[0]]= data[1]
        })
        TRANSFORM_GEEK_DATA.push(dict)
    })
    return TRANSFORM_GEEK_DATA
}

var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
console.log(transformGeekData(array))