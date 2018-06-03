/*
/!*
Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.
    *!/

function isInArray(array: Simple[], ...args: Simple[]): boolean {
    let isAllInArray: boolean = true;
    args.forEach((item: Simple) => {
        isAllInArray = array.indexOf(item) !== -1;
    });
    return isAllInArray;

}

type Simple = number | string | null | boolean;
isInArray([1, 2, '3', 4, 5, false], '3', 4, 5);

/!*2)
писать функцию summator(), которая сумирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*!/
type SumType = number | string;

function summator(...args: SumType[]): number {
    let sum: number = 0;
    args.forEach((arg: SumType) => {
        if (typeof arg === 'string') {
            const item = parseInt(arg, 10);
            if (typeof item === 'number') {
                sum += item;
            }
        } else {
            sum += arg;
        }
    });
    console.log(sum);
    return sum;

}

summator(1, '3', 1, 'kyky');

/!*3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.*!/
function getUnique(...arr: number[]) {
    const exitArray: number[] = [];
    for (const item of arr) {
        if (exitArray.indexOf(item) === -1) {
            exitArray.push(item);
        }
    }
}

getUnique(1, 2, 3, 3, 3, 4, 5, 5, 6);*/
