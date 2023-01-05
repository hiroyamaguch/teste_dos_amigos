import { AppError } from '@infra/errors';

export class PersonNotFound extends AppError {
  constructor() {
    super('Person not found', 404);
  }
}
