/**
 * Task 1
 * @param {T[]} a
 * @param {T} bcd
 * @returns {boolean}
 */
function isInArray<T>(a: T[], ...bcd: T[]): boolean {
    let contains: boolean;

    if (a.length !==  bcd.length) {
        contains = false;
    } else {
        contains = bcd.every((arg: T): boolean => {
            return a.includes(arg);
        });
    }

    return contains;
}
const resultIsInArray = isInArray<string | number>(['string', 5, 22323], 22323, 'string', 5);

/**
 * Task 2
 * @param {string | number} args
 * @returns {number}
 */
function summator(...args: (string | number)[]): number {
    // I don't know what is wrong here(
    const sum: number = args.reduce((_prev: string | number, _curr: string | number): number => {
        let prev: number;
        let curr: number;

        if (typeof _prev !== 'number') {
            prev = Number.parseInt(_prev);
            prev = !isNaN(prev) ? prev : 0;
        } else {
            prev = _prev;
        }

        if (typeof _curr !== 'number') {
            curr = Number.parseInt(_curr);
            curr = !isNaN(curr) ? curr : 0;
        } else {
            curr = _curr;
        }

        return prev += curr;
    });

    return sum;
}
const resultSummator = summator('55', '11fake5', 1);

/**
 * Task 3
 * @param {T} args
 * @returns {T[]}
 */
function getUnique<T>(...args: T[]): T[] {
    const unique: T[] = args.filter((value: T, index: number, self: T[]) => {
        return self.indexOf(value) === index;
    });

    return unique;
}
const resultGetUnique = getUnique<string | number| boolean>(4, 2, 3, 9, 'fake', 4, false);

/**
 * Task 4
 * @param {string} text
 * @returns {string}
 */
function wordsInverter(text: string): string {
    const isPlainCharPattern = /^[A-Za-z]+$/;
    const words = text.split(' ');
    const invertedWords: string[] = [];
    type cutChar = {
        char: string,
        index: number,
    };

    words.forEach((word: string): void => {
        const chars: string[] = word.split('');

        if (chars.length > 1) {
            const cutChars: cutChar[] = [];

            chars.forEach((char: string, index: number): void => {
                if (!isPlainCharPattern.test(char)) {
                    cutChars.push({char, index});
                    delete chars[index];
                }
            });

            chars.reverse();

            cutChars.forEach((char: cutChar): void => {
                chars.splice(char.index, 0, char.char);
            });
        }

        invertedWords.push(chars.join(''));
    });

    return invertedWords.join(' ');
}
const resultWordsInverter = wordsInverter('s1tar3t 2   low5');
