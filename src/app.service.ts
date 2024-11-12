import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async fetchKlineData(unit: string, start: number, end: number): Promise<any> {
    const url = `https://eoseyes.com/ram/kline?unit=${unit}&start=${start}&end=${end}`;

    const response = await firstValueFrom(this.httpService.get(url));
    console.log("Kirov Reporting!")
    return response.data; // Return the response data directly
  }
}
