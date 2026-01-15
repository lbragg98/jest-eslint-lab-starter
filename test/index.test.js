const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('should capitalize each word in a normal sentence', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('should return an empty string for an empty input', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('should handle strings with special characters correctly', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-world');
    });

    test('should capitalize a single word', () => {
        expect(capitalizeWords('hello')).toBe('Hello');
    });
});

describe('filterActiveUsers', () => {
    test('should filter out inactive users', () => {
        const users = [
            { name: 'Alice', active: true },
            { name: 'Bob', active: false },
            { name: 'Charlie', active: true },
        ];
        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', active: true },
            { name: 'Charlie', active: true },
        ]);
    });

    test('should return an empty array if all users are inactive', () => {
        const users = [
            { name: 'Dave', active: false },
            { name: 'Eve', active: false },
        ];
        expect(filterActiveUsers(users)).toEqual([]);
    });
    test('should return an empty array for an empty input array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('should return a correct log string for valid inputs', () => {
        expect(logAction('login', 'Alice')).toBe('User Alice performed login');
    });

    test('should handle missing action gracefully', () => {
        expect(logAction(undefined, 'Bob')).toBe('Invalid input');
    });

    test('should handle missing username gracefully', () => {
        expect(logAction('logout')).toBe('Invalid input');
    });

    test('should handle empty strings as inputs', () => {
        expect(logAction('', '')).toBe('Invalid input');
    });
});