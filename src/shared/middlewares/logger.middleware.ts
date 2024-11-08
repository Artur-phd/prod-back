import { HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  private logger = console;

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, body, originalUrl } = request;
    const now = Date.now();

    response.on('close', () => {
      const { statusCode } = response;
      const message = `${method} ${originalUrl} ${statusCode} ${Date.now() - now}ms - ${JSON.stringify(body)} `;

      if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
        this.logger.error(message);
      } else {
        this.logger.log(message);
      }
    });
    next();
  }
}
