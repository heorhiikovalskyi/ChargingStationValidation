import { Request, Response, NextFunction } from 'express';

export type MiddlewareFunction = (req: Request, res: Response) => Promise<Response<unknown, Record<string, unknown>>>;

const tryCatch = (foo: MiddlewareFunction) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await foo(req, res);
  } catch (error) {
    return next(error);
  }
};

export default tryCatch;
