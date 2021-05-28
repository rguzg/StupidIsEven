function IsEven(number){
    if(typeof(number) != "number"){
        throw new TypeError(`You silly goose! The function needs a variable of type number not of type ${typeof(number)}! I know JavaScript is a dynamically typed language but in this house we're strongly typed!`);
    }

    // If number is even, it'll return -0 (why does JS have a minus zero?) and if it's odd, it'll return -1

    // In all seriousness, the reason why this works is pretty neat. Anding a number and 1 gives you the lowest bit of that number, that is the bit that represents 2^0 aka 1. So if that bit is present, that means the number is odd and if it isn't present then the number is even.

    // Why did I keep the - operator from Raymond's example? Just to complain about the existance of -0
    let mask = -(number & 1);

    return !mask;
}

module.exports = IsEven