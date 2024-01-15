export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('already has')
        }
        this.members.add(character)
    }

    addAll(...characters) {
        for (const character of characters) {
            this.members.add(character)
        }
    }
    toArray() {
        const arr = [];
        this.members.forEach((character) =>  {
            arr.push(character)
        })
        return arr
    }
}