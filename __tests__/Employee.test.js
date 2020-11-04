const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Eve');

    expect(employee.name).toBe('Eve');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});



