import { Person } from './person';

describe('Person', () => {
  it('should be able to create a person', () => {
    expect(
      () => new Person({ cpf: '12345678901', name: 'Pedro' }),
    ).toBeTruthy();
  });

  it('should not be able to create a person with cpf less than 11 characters', () => {
    expect(() => new Person({ cpf: '1', name: 'Pedro' })).toThrow();
  });
});
