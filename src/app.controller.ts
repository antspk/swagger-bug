import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppErrorResource } from './app.error';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 400, type: AppErrorResource })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
