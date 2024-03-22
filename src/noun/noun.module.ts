import { Module } from '@nestjs/common';
import { NounController } from './noun.controller';
import { NounService } from './noun.service';

@Module({
  controllers: [NounController],
  providers: [NounService]
})
export class NounModule {}
