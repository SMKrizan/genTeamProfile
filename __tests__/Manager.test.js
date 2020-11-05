const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager('Eve', 34567, 'ejones@work.org', 1314);

    expect(manager.office).toEqual(expect.any(Number))
});