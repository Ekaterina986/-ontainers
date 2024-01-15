export default class Character {
    constructor(name, type) {
        const typs = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
        if (name.length < 2 || name.length > 10) {
            throw new Error('invalid name');
        }
        if (!typs.includes(type)) {
            throw new Error('invalid type ' + type);
        }
        this.type = type;
        this.name = name;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }
    
    levelUp() {
        if (this.health > 0) {
            this.level = this.level + 1;
            this.attack = this.attack + (0,2*this.attack);
            this.defence = this.defence + (0,2*this.defence);
            this.health = 100;
        } else {
            throw new Error('invalid healths');
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            throw new Error('invalid healths');
        }
    }
}