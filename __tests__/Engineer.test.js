const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Eve', 34567, 'Jones@work.org', 'EJones');

    expect(engineer.github).toEqual(expect.any(String));
})