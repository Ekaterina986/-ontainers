import ErrorRepository from "../ErrorRepository";

test('translate', () => {
    const obj = new ErrorRepository();
    const res = obj.translate(1);
    expect(res).toBe('error Test');

    const res1 = obj.translate(5);
    expect(res1).toBe('Unknown error');

 })