import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from 'src/Schema/Dictionary.schema';
import { AddWordDto } from './dto/AddWord.dto';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectModel(Dictionary.name) private dictionaryModel: Model<Dictionary>,
  ) {}

  addWord(addWordDto: AddWordDto) {
    const newWord = new this.dictionaryModel(addWordDto);
    return newWord.save();
  }
}
