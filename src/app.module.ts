import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryModule } from './dictionary/dictionary.module';
import { NounModule } from './noun/noun.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();

const db = process.env.MONGODB_URI;

@Module({
  imports: [MongooseModule.forRoot(db), DictionaryModule, NounModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
