QUnit.test( "Fizz", function( assert ) {
    var expected = "Fizz"
    var actual = fizzBuzz(3);
    assert.equal(expected, actual, "Passed!");
});

QUnit.test( "Buzz", function( assert ) {
    var expected = "Buzz"
    var actual = fizzBuzz(5);
    assert.equal(expected, actual, "Passed!");
});

QUnit.test( "Fizz Buzz", function( assert ) {
    var expected = "FizzBuzz"
    var actual = fizzBuzz(15);
    assert.equal(expected, actual, "Passed!");
});

QUnit.test( "Other", function( assert ) {
    var expected = "1"
    var actual = fizzBuzz(1);
    assert.equal(expected, actual, "Passed!");
});

QUnit.test( "Out of Range - Zero", function( assert ) {
    var expected = "Out of range"
    var actual = fizzBuzz(0);
    assert.equal(expected, actual, "Passed!");
});

QUnit.test( "Out of Range - Minus", function( assert ) {
    var expected = "Out of range"
    var actual = fizzBuzz(-3);
    assert.equal(expected, actual, "Passed!");
});
