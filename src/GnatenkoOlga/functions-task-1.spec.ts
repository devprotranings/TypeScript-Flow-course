import { isInArray } from './functions-task-1';
describe('In Array', () => {
    it('test', () => {
        expect(isInArray([1, 3, 4], 1, 2, 4)).toEqual(false);
    });
});
