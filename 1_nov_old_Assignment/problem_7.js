function assertObjectsEqual(actual, expected) {

    var expectedProps = Object.getOwnPropertyNames(actual);
    var actualProps = Object.getOwnPropertyNames(expected);

    if (expectedProps.length != actualProps.length) {
        return false;
    }

    for (var i = 0; i < expectedProps.length; i++) {
        var propName = expectedProps[i];
        if (actual[propName] !== expected[propName]) {
            return false;
        }
    }
    return true;
}

var expected = {foo: 5, bar: 6};
var actual = {bar: 6, foo: 5}
console.log(assertObjectsEqual(actual, expected));