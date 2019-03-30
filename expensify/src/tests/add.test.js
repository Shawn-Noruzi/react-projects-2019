const add = (a, b) => a + b +2;
const generateGreeting = (name = 'anon ') => `hello ${name}`;


test("adds 2 numbers", () => {
  const result = add(3, 4);
    expect(result).toBe(9);
});

test('hello $name is displayed', ()=> {
    const greeting = generateGreeting('alex');

    expect(greeting).toBe('hello alex');

})

test('anon test', () => {
    const greeting2 = generateGreeting('anon');
    expect(greeting2).toBe('hello anon');

})