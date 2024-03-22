import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryModule } from './dictionary/dictionary.module';
import { NounModule } from './noun/noun.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ibomlang1:Ya6KWZO4sazEuG2Z@ibomlang1.watk83n.mongodb.net/ibomlang_api?retryWrites=true&w=majority',
    ),
    DictionaryModule,
    NounModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
