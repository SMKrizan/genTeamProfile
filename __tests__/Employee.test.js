const Employee = require('../lib/Employee');

describe('Employee Object', () => {
	it('creates a new employee object successfully', () => {
		const employee = new Employee('Eve', 34567, 'Jones@work.org');
		expect(employee.name).toEqual('Eve');
		expect(employee.id).toEqual(34567);
		expect(employee.email).toEqual('Jones@work.org');
	});
});



