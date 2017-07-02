import { helloWorldDelayed } from '../src/quiteadvanced.js'
jest.useFakeTimers();

describe('Advanced methods for our app', () => {
    
    it('should return hello world after two seconds', () => {
        helloWorldDelayed().then(data => {
            expect(data).toEqual('Hello World!');
        });
        
    });
});