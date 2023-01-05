import { AppError } from '@infra/errors';

export class PersonWithSameCPF extends AppError {
  constructor() {
    super('CPF already exists on database');
  }
}
