import { NextFunction, Request, Response } from 'express';
import { ICustomResponse } from '../shared/interfaces/custom.response.interfaces';

export function responseHandlerMiddleware(req: Request, res: Response, next: NextFunction): void {
    const originalJson = res.json;

  // Sobrescreve a função res.send para adicionar as informações padrões
  res.json = function (data: any): Response<any, Record<string, any>> {
    const customResponseData = {
      httpCode: res.statusCode,
      routePath: req.originalUrl,
      timestamp: new Date().toISOString(),
      data,
    } as ICustomResponse;

    // Envia a resposta JSON com os dados modificados
    return originalJson.bind(this)(customResponseData);
  };

  next();
}
