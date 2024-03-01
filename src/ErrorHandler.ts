import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { CustomError } from './errors/CustomError';
import { InvalidLanguage } from './errors/InvalidLanguage';
import { i18next } from './i18';

class ErrorHandler {
  zod = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
      const { issues } = err;
      const errors: CustomError[] = [];
      issues.forEach((issue) => {
        const field: (string | number)[] = [];
        issue.path.forEach((e) => field.push(typeof e === 'string' ? i18next.t(`fields:${e}`) : e));
        errors.push({ field, description: issue.message });
      });
      return res.status(400).send(errors);
    }
    next(err);
  };

  language = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof InvalidLanguage) return res.status(err.code).json(err.message);
    next(err);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  server = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    return res.sendStatus(500);
  };
}

export default ErrorHandler;
