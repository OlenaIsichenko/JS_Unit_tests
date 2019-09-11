let array = require('./MyArray');
const assert = require('assert');

let array1 = new array.createArray(1,3);
let array2 = new array.createArray(2,4);
let array3 = new array.createArray(10,4);
let array4 = new array.createArray(2,5);
let array5 = new array.createArray(2,0);

describe("createArray", function() {
    let num = '1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17';
    let num_one = '2,3,4,5,6,7,8,9,20';
    let num_two = '1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18';

    it("Array isn`t empty", function() {
        assert.notEqual(array1, null);
    });

    it("Skip n = 1, length array is 9, array = " + num_one, function() {
        assert.equal(array1, num_one);
    });

    it("Skip n = 2, length array is 16, array = " + num_two, function() {
        assert.equal(array2, num_two);
    });

    it("Skip n = 10, length array is 16, array = " + num, function() {
        assert.equal(array3, num);
    });

    it("The array with size = 5 has length of 25 ", function ()  {

        assert.equal(array4.length, 25);
    });

    it("The array with size = 0 does not exist", function() {

        assert.equal(array5.length, 0);
    });

});