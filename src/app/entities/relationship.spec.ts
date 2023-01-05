import { Relationship } from './relationship';

describe('Relationship', () => {
  it('should be able to create a relationship', () => {
    expect(
      () => new Relationship({ cpf1: '12345678901', cpf2: '12345678902' }),
    ).toBeTruthy();
  });

  it('should not be able to create a relationship with cpf1 less than 11 characters', () => {
    expect(
      () => new Relationship({ cpf1: '1', cpf2: '12345678902' }),
    ).toThrow();
  });

  it('should not be able to create a relationship with cpf2 less than 11 characters', () => {
    expect(
      () => new Relationship({ cpf1: '12345678902', cpf2: '1' }),
    ).toThrow();
  });

  it('should not be able to create a relationship with same cpf', () => {
    expect(
      () => new Relationship({ cpf1: '12345678902', cpf2: '12345678902' }),
    ).toThrow();
  });
});
