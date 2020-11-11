const Intern = require('../lib/Intern');

describe('Intern Object', () => {
	it('creates a new intern object successfully', () => {
		const intern = new Intern('Eve', 34567, 'Jones@work.org', 'University of Wisconsin');
		expect(intern.name).toEqual('Eve');
		expect(intern.id).toEqual(34567);
		expect(intern.email).toEqual('Jones@work.org');
		expect(intern.school).toEqual('University of Wisconsin');
	});
});