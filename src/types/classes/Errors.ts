export type LocalError = {
  field: (string | number)[];
  description: string;
};

export class ValidationError extends Error {
  public code: number;
  constructor(message: string) {
    super(message);
    this.code = 400;
  }
}

export class ExtendedValidationError {
  public code: number;
  public errors: LocalError[];
  constructor(errors: LocalError[]) {
    this.errors = errors;
    this.code = 400;
  }
}
