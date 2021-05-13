// import the url check function
import { urlChecker } from "../js/checkURL"
describe('Test check url functionality', () => {
    it('Testing the checkUrl function defined or not', () => {
        expect(urlChecker).toBeDefined();
    })
})