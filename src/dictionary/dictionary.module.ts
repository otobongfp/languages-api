import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dictionary, DictionarySchema } from 'src/Schema/Dictionary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dictionary.name, schema: DictionarySchema },
    ]),
  ],
  providers: [DictionaryService],
  controllers: [DictionaryController],
})
export class DictionaryModule {}
