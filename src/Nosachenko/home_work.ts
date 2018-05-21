
// 1st Task
type Types = boolean | string | null | number | undefined;
const isInArray = (arrayOfTypes: Types[], ...params: Types[]): boolean => {
    for (let element of params) {
        if(arrayOfTypes.indexOf(element) < 0){
            return false;
        }
    }
    return true;
}
console.log('isInArray ', isInArray(['a', 3, 5], 'a', 3, 5));
console.log('isInArray ', isInArray(['a', 3, 5], 'a', 4, 5));

// 2nd Task
type AvaliableTypes = number | string;
const summator = (...params: AvaliableTypes[]): number => {
    let summ: number = 0;
    try{
        for (let element of params) {
            summ += +element;
        }
        if(isNaN(summ)){
            throw('The function gets only numbers. It could be the \'number\' or the \'string\' types.');
        }
    } catch(err){
        console.error(err);
    }
    return summ;
} 

console.log('summator ', summator(5, '4', 11));
// console.log('summator ', summator(5, '4', 11, 'sds'));

// 3rd task
const getUnique = (dataArray: Types[]): Types[] => {
    const unicArray: Types[] = [];
    for (let element of dataArray) {
        if(unicArray.indexOf(element) < 0) {
            unicArray.push(element);
        }
    }
    return unicArray;
}

console.log('getUnique ', getUnique(['4', 4, 1, 55, false, 4, undefined, undefined]));

// 4th task

