import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ram/kline')
  async getHello(
    @Query('unit') unit: string,
    @Query('start') start: number,
    @Query('end') end: number,
  ) {
    return await this.appService.fetchKlineData(unit, start, end);
  }
}
