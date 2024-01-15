import Character from '../Character';

test('create copy', () => {
    const character = new Character( 'abc', 'Bowerman');

    const correct = {
        type: 'Bowerman',
        name: 'abc',
        attack: null,
        defence: null,
        level: 1,
        health: 100,
    }

    expect (character).toEqual(correct);

    expect(() => {
        const character = new Character( 'a', 'Bowerman');
    }).toThrow();

    expect(() => {
        const character = new Character( 'aaa', 'Bowerman1');
    }).toThrow();
});

test('levelUp', () => {
    const character = new Character( 'abc', 'Bowerman');
    character.health = 50;

    const correct = {
        type: character.type,
        name: character.name,
        attack: character.attack + (0,2*character.attack),
        defence: character.defence + (0,2*character.defence),
        level: 2,
        health: 100,
    }
    character.levelUp();

    expect(character).toEqual(correct);
    
    
    character.health = 0;
    expect(() => {
        character.levelUp();
    }).toThrow();
    
});

test('damage', () => {
    const character = new Character( 'abc', 'Bowerman');
    
    const points = 10;
    const correct = {
        type: character.type,
        name: character.name,
        attack: character.attack,
        defence: character.defence,
        level: 1,
        health: character.health - points * (1 - character.defence / 100),
    }
    character.damage(points);

    expect (character).toEqual(correct);

    character.health = -1;
    expect(() => {
        character.damage();
    }).toThrow();
});