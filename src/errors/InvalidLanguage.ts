export class InvalidLanguage extends Error {
  public code: number;

  constructor() {
    super('this language is not available');
    this.code = 404;
  }
}
