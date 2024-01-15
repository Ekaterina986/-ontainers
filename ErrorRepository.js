export default class ErrorRepository {
    constructor() {
        this.map = new Map([
            [1,  'error Test'],
            [2,    'error Test 1'],
            [3, 'error Test 2']
          ]);
    }

    translate(code) {
        if (!this.map.has(code)) {
            return 'Unknown error'
        }
        return this.map.get(code)
    }
}