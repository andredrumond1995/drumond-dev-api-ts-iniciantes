import { NextFunction, Request, Response } from 'express';
import { get } from 'lodash';
import { HTTP_CODES } from '../shared/constants/http.codes';

export function errorHandlerMiddleware(error: Error & { statusCode: number }, req: Request, res: Response, next: NextFunction): void {
  console.error(error);
  res.status(get(error, 'statusCode', HTTP_CODES.INTERNAL_SERVER_ERROR)).json(error);
}
