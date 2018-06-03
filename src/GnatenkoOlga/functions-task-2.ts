type term = number | string;

function summator(...args: Array<term>): number {
  return args.reduce<number>((prevSum: number, curItem: term): number => {
    let curValue: number;
    if (typeof curItem === 'number') {
      curValue = curItem;
    } else {
      curValue = isNaN(parseFloat(curItem)) ? 0 : parseFloat(curItem);
    }
    return prevSum + curValue;
  }, 0);
}

// console.log(summator()); // expected output: 0
// console.log(summator(1, 2)); // expected output: 3
// console.log(summator(1, 2, '3.5')); // expected output: 6.5
// console.log(summator(1, 2, 'abc')); // expected output: 3
// console.log(summator(1, 2, undefined)); // expected output: 3