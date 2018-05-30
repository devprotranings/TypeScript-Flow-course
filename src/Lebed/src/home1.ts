/**
 * Created by eugene.lebed on 5/18/18
 */

// 1
type primitives = number | string | boolean | symbol | undefined | null;

const isInArray = (array: primitives[], ...other: primitives[]): boolean => {
    return other.every((el) => array.indexOf(el) !== -1);
};

console.log(isInArray([1, 2, 4], 1, 2, 4)); // true
console.log(isInArray([1, 2, 4], 1, 2, 5)); // false

// 2
type X = string | number;

const summator = (...params: X[]): number => params.reduce<number>((acc, curr) => acc + +curr, 0);

console.log(summator(1, "2", 3);            // 6
console.log(summator("1", "2", "3", "4");   // 10


// 3
const getUnique = (...arr: any[]) => arr.filter((x, i) => arr.indexOf(x) === i);

console.log(getUnique(1, 1, 2, 1, 3)); // 1, 2, 3
console.log(getUnique(1, 1, 2, 1, 3, 4, 2)); // 1, 2, 3, 4

// 4
const reverseString = (str: string) => {
    const isString = /[A-Za-z]/g;

    const reverse = (s: string) => {
        return s
            .split("")
            .reduceRight((x, y, i, arr) => {
                y.match(isString) ? x += y : x += arr[arr.length - i - 1];
                return x;
            }, "");
    };

    return str
        .split(" ")
        .map(reverse)
        .join(" ");
};

console.log(reverseString("s1tar3t 2 hellow"));       // t1rat3s 2 wolleh
console.log(reverseString("s1ta$%r3t 2 hel^low"));    // t1ra$%t3s 2 wol^leh
console.log(reverseString("s1tar3t 2   low5"));       // t1rat3s 2   wol5


// 5
interface IStringToNumberMap {
    [key: string]: any;
}

const parse = (str: string): string => {
    let result = "";

    str
        .split("")
        .reduce((x: IStringToNumberMap, y: string, i: number, arr: string[]) => {
            x[y] = (x[y] ? x[y] : 0) + 1;
            if (y !== arr[i + 1]) {
                result += `${x[y]}${y}`;
                x = {};
            }
            return x;
        }, {});

    return result;
};

console.log(parse("aaabbac"));  // 3a2b1a1c