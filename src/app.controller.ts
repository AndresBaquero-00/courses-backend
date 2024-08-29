import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get('/seed')
  public generateSeed(): void {
    this.appService.generateSeed();
  }
}
