type primitive = string | number | boolean;


function isInArray(arg1: Array<primitive>, ...args: Array<primitive>): boolean {
        return args.every((item: primitive) => arg1.includes(item)
    );
}

// console.log(isInArray([1], 1)); // should output true
// console.log(isInArray([], 1)); // should output false
// console.log(isInArray([10, 'abc'], 'abc', 10)); // should output true 
// console.log(isInArray([10, 'abc'], 'abc', '10')); // should output false