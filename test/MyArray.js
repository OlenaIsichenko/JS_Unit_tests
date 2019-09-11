function createArray(n, size) {
    let arr = [];
    let i = 1;

    while(arr.length < (size**2)) {
        let string = String(i);
        if (!string.includes(n)) {
            arr.push(string);
        }
        i++;
    }
    return arr;

}

exports.createArray = createArray;