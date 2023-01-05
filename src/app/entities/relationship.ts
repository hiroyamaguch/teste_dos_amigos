import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export interface RelationshipProps {
  cpf1: string;
  cpf2: string;
  createdAt: Date;
}

export class Relationship {
  private _id: string;
  private props: RelationshipProps;

  constructor(
    props: Replace<RelationshipProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get cpf1(): string {
    return this.props.cpf1;
  }

  public get cpf2(): string {
    return this.props.cpf2;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
