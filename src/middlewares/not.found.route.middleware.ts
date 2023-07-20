import { NextFunction, Request, Response } from 'express';
import { HTTP_CODES } from '../shared/constants/http.codes';

export function notFoundRouteMiddleware(req: Request, res: Response, next: NextFunction): void {
  res.status(HTTP_CODES.NOT_FOUND).json({ error: 'Rota não encontrada' });
}
