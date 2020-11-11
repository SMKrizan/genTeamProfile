const Manager = require('../lib/Manager')

describe('Manager Object', () => {
	it('creates a new manager object successfully', () => {
		const manager = new Manager('Eve', 34567, 'Jones@work.org', 76543);
		expect(manager.name).toEqual('Eve');
		expect(manager.id).toEqual(34567);
		expect(manager.email).toEqual('Jones@work.org');
		expect(manager.office).toEqual(76543);
	});
});