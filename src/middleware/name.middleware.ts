import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class NameMiddleware implements NestMiddleware {
  use(req: any, res: any, next: any) {
    req.name = req.header('name') || req.query.name || req.body.name;

    if (!req.name) {
      throw new HttpException('Invalid name', 401);
    }

    next();
  }
}