import { Request, Response, NextFunction } from 'express';
import { ValidationError } from './types/classes/Errors';
import { ZodError } from 'zod';
import { LocalError } from './types/classes/Errors';

class ErrorHandler {
  validation = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidationError) {
      const { code, message } = err;
      return res.status(code).send(message);
    }
    next(err);
  };

  zod = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
      const { issues } = err;
      const errors: LocalError[] = [];
      issues.forEach((issue) => errors.push({ field: issue.path, description: issue.message }));
      return res.status(400).send(errors);
    }
    next(err);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  server = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    return res.sendStatus(500);
  };
}

export default ErrorHandler;
