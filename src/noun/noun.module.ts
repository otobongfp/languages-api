import { Module } from '@nestjs/common';
import { NounController } from './noun.controller';
import { NounService } from './noun.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Noun, NounSchema } from 'src/Schema/Noun.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Noun.name, schema: NounSchema }]),
  ],
  controllers: [NounController],
  providers: [NounService],
})
export class NounModule {}
