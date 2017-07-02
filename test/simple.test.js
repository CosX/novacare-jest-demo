import { geteveryother, addmonkeyfield } from '../src/simple.js'

describe('Simple methods for our app', () => {
    
    it('should get every other value in array', () => {
        const original = [1, 2, 3, 4];
        const alteredvalue = geteveryother(original);
        expect(alteredvalue).toEqual([1, 3]);
    });

    it('should return our jungle object with a monkey named Dave', () => {
        const jungle = {
            owner: 'Jack',
            bananas: 55
        };

        const junglewithmonkey = addmonkeyfield(jungle, 'Dave');

        expect(junglewithmonkey).toEqual({
            owner: 'Jack',
            bananas: 55,
            monkeyname: 'Dave'
        });
    });
});