import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { responseHello } from './helpers/response.helper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  index() {
    return responseHello();
  }

}
