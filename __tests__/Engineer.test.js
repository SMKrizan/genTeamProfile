const Engineer = require('../lib/Engineer');

describe('Engineer Object', () => {
	it('creates a new engineer object successfully', () => {
		const engineer = new Engineer('Eve', 34567, 'Jones@work.org', 'EJones');
		expect(engineer.name).toEqual('Eve');
		expect(engineer.id).toEqual(34567);
		expect(engineer.email).toEqual('Jones@work.org');
		expect(engineer.github).toEqual('EJones');
	});
});