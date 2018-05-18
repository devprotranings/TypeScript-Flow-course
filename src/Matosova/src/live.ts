


/// TASK 1

function isInArray(arr: Array<number | string>, ...restOfParam: Array<number | string>) {
    let allExist: number = 0;
    for(let i=0; i < restOfParam.length; i++)  {
        allExist = arr.indexOf(restOfParam[i]);
        if(allExist < 0) return false;
    };
   
    return true;
}

console.log(isInArray([1, 4, 'str'], 4, 3, 'str'));

/// TASK 2

function summator(...restOfParam: Array<number | string>): number {
    let sum: number = 0;
    restOfParam.forEach((el)=> {
        if(!isNaN(Number(el))){
            sum += +el;
        }
    })
    return sum;
}

console.log(summator(3,5, '45', 'dff'));

/// TASK 3

function onlyUnique(value: string | number | Array<string | number>, index: number, self: any[]) {
    return self.indexOf(value) === index;
}


function getUnique(...restOfParam: Array<any>): Array<any> {
   let arr: Array<any> = restOfParam.filter(onlyUnique);
    return arr;
}
console.log(getUnique(1,7,3, 'sjujd', [1, 7, 8],'sjujd', 78, undefined));


/// TASK 4


function reverseWords(str:string): string{
    return str.replace(/[a-z]+/gi, function(s){return s.split('').reverse().join('')});
}
  

console.log(reverseWords('s1tar3t 2 hellow'));

/// TASK 5

let allowed = /[A-Za-z0-9]/i;




let results = Array.prototype.reduce.call("aaabbbc3", function (data: Array<number | string>, letter: any): Array<number | string> {

    if (allowed.test(letter)) {
    
        letter = letter.toLowerCase();
    
        if (data[letter] === undefined) {
            data[letter] = 0;
        }
    
        data[letter] += 1;
        
    }
    
    return data;

}, {});

let str: string = '';
for (let letter in results) {
    if(letter || results.length){
        str += `${letter}${results[letter]}`;
    }
}

console.log(str);
