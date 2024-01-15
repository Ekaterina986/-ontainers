import Team from "../Team";
import Character from "../Character";

test('add', () => {
    const character = new Character( 'abc', 'Bowerman');
    const character1 = new Character( 'abcd', 'Swordsman');
    const team = new Team();

    expect(team.members.has(character)).toBeFalsy();
    expect(team.members.size).toBe(0)
    team.add(character);
    expect(team.members.has(character)).toBeTruthy();
    expect(team.members.size).toBe(1)
    expect(() => {
        team.add(character);
    }).toThrow();
    expect(team.members.size).toBe(1)

    expect(team.members.has(character1)).toBeFalsy();    
    team.add(character1);
    expect(team.members.has(character1)).toBeTruthy();
    expect(team.members.size).toBe(2)
    expect(() => {
        team.add(character1);
    }).toThrow();
    expect(team.members.size).toBe(2)
});

test('addAll', () => {
    const character = new Character( 'abc', 'Bowerman');
    const character1 = new Character( 'abcd', 'Swordsman');
    const character2 = new Character( 'abce', 'Magician');
    const team = new Team();

    expect(team.members.has(character)).toBeFalsy();
    expect(team.members.size).toBe(0)
    team.addAll(character, character, character1, character1, character2);
    expect(team.members.size).toBe(3)
    expect(team.members.has(character)).toBeTruthy();
    expect(team.members.has(character1)).toBeTruthy();
    expect(team.members.has(character2)).toBeTruthy();
});

test('toArray', () => {
    const character = new Character( 'abc', 'Bowerman');
    const character1 = new Character( 'abcd', 'Swordsman');
    const character2 = new Character( 'abce', 'Magician');
    const team = new Team();

    team.addAll(character, character1, character2);

    const arr = team.toArray();
    expect(arr.length).toBe(3);
    let car = arr.find(item => item === character);
    expect(car).toBeTruthy();
    car = arr.find(item => item === character1);
    expect(car).toBeTruthy();
    car = arr.find(item => item === character2);
    expect(car).toBeTruthy();
});