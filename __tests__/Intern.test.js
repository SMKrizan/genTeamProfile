const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Eve', 34567, 'Jones@work.org', 'University of Wisconsin');

    expect(intern.school).toEqual(expect.any(String));
})