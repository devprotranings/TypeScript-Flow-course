function isString(value: number | string): value is string {
  return typeof value === 'string';
}

// #1

type General = string | number | boolean;

function isInArray(array: General[], ...params: General[]): boolean {
  return params.every(item => array.includes(item));
}

console.log('isInArray: ', isInArray([1, 2, false], 1, 2, false));
console.log('isInArray: ', isInArray([1, '2', false], '2', null));
console.log('isInArray: ', isInArray([1, '2', false], '2'));


// #2
type ISimmator = string | number;

function summator(...params: ISimmator[]): number {
  let count = 0;

  for (let i = 0; i < params.length; i++) {
    const current: ISimmator = params[i];
    count += isString(current) ? parseFloat(current) : current;
  }

  return count;
}

console.log('summator: ', summator(1, 2, 3));
console.log('summator: ', summator('1', '2', '3'));
console.log('summator: ', summator(1, '2', 3));


// #3

function getUnique(array: General[]): General[] {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log('getUnique: ', getUnique([1, 1, 2, 4, 4, 3]));
console.log('getUnique: ', getUnique([1, false, 4, 4, 3, false]));
console.log('getUnique: ', getUnique([1, 1, 4, 3]));


// #4

function reverse(str: string): string {
  const regExp = /^[0-9!@#$%\^&*)(+=._-]*$/;
  const splitArray = str.split(/\s/g);

  return splitArray.map(item => {
    const splitArr = item.split('');
    const filteredByText = splitArr.filter((item => !regExp.test(item)))
      .reverse();
    const tempObj = {};

    for (let i = 0; i < splitArr.length; i++) {
      if (regExp.test(splitArr[i])) {
        tempObj[i] = splitArr[i];
      }
    }

    for (let idx in tempObj) {
      filteredByText.splice(+idx, 0, tempObj[idx]);
    }

    return filteredByText.join('');
  })
    .join(' ');
}

console.log('reverse: ', reverse('s1tar3t 2 hellow'), reverse('s1tar3t 2 hellow') === 't1rat3s 2 wolleh');
console.log('reverse: ', reverse('s1ta$%r3t 2 hel^low'), reverse('s1ta$%r3t 2 hel^low') === 't1ra$%t3s 2 wol^leh');
console.log('reverse: ', reverse('s1tar3t 2   low5'), reverse('s1tar3t 2   low5') === 't1rat3s 2   wol5');

// #5

function calcLetters(value: string): string {
  const valueArray = value.split('');
  const temp = {};
  let str = ``;

  for (let i = 0; i < valueArray.length; i++) {
    if (!temp[valueArray[i]]) {
      temp[valueArray[i]] = []
    }

    temp[valueArray[i]].push(valueArray[i]);
  }

  for (let key in temp) {
    str += `${key}${temp[key].length}`;
  }

  return str;
}

console.log('calcLetters: ', calcLetters('aabbbccd'));
console.log('calcLetters: ', calcLetters('hello'));