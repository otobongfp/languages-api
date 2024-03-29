import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API that powers a local languages project for sub-saharan africa';
  }
}
