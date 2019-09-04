import { HttpException, Response as Res } from '@nestjs/common';
import { ApplicationContext } from '../app.context';
import { AppService } from '../app.service';

export class Response {
  message: string;
  data: any;

  constructor(message: string, data: any) {
    this.message = message;
    this.data = data;
  }
}

export const response = (message: string, data: any = null) => new Response(message, data);

export const responseError = (message: string, code: number = 400) => {
  return Promise.reject(new HttpException({ message }, code));
};

export const responseHello = async () => {
  const app = await ApplicationContext();
  const appService = app.get(AppService);
  return appService.getHello();
};