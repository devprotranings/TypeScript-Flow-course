"use strict";
/**
 * Task 1
 * @param {T[]} a
 * @param {T} bcd
 * @returns {boolean}
 */
function isInArray(a, ...bcd) {
    let contains;
    if (a.length !== bcd.length) {
        contains = false;
    }
    else {
        contains = bcd.every((arg) => {
            return a.includes(arg);
        });
    }
    return contains;
}
const resultIsInArray = isInArray(['string', 5, 22323], 22323, 'string', 5);
function summator(...args) {
    const sum = args.reduce((prev, curr) => {
        if (typeof prev !== 'number') {
            prev = Number.parseInt(prev);
            prev = !isNaN(prev) ? prev : 0;
        }
        if (typeof curr !== 'number') {
            curr = Number.parseInt(curr);
            curr = !isNaN(curr) ? curr : 0;
        }
        return prev += curr;
    }, 0);
    return sum;
}
const resultSummator = summator('55', '11fake5', 1);
/**
 * Task 3
 * @param {T} args
 * @returns {T[]}
 */
function getUnique(...args) {
    const unique = args.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    return unique;
}
const resultGetUnique = getUnique(4, 2, 3, 9, 'fake', 4, false);
/**
 * Task 4
 * @param {string} text
 * @returns {string}
 */
function wordsInverter(text) {
    const isPlainCharPattern = /^[A-Za-z]+$/;
    const words = text.split(' ');
    const invertedWords = [];
    words.forEach((word) => {
        const chars = word.split('');
        if (chars.length > 1) {
            const cutChars = [];
            chars.forEach((char, index) => {
                if (!isPlainCharPattern.test(char)) {
                    cutChars.push({ char, index });
                    delete chars[index];
                }
            });
            chars.reverse();
            cutChars.forEach((char) => {
                chars.splice(char.index, 0, char.char);
            });
        }
        invertedWords.push(chars.join(''));
    });
    return invertedWords.join(' ');
}
const resultWordsInverter = wordsInverter('s1tar3t 2   low5');
