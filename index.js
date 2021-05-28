function IsEven(number){
    if(typeof(number) != "number"){
        throw new TypeError(`You silly goose! The function needs a variable of type number not of type ${typeof(number)}! I know JavaScript is a dynamically typed language but in this house we're strongly typed!`);
    }

    // If number is even, it'll return -0 (why does JS have a minus zero?) and if it's odd, it'll return -1
    let mask = -(number & 1);

    return !mask;
}

module.exports = IsEven