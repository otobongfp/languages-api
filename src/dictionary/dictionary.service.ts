import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from 'src/Schema/Dictionary.schema';
import { AddWordDto } from './dto/AddWord.dto';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectModel(Dictionary.name)
    private dictionaryModel: Model<Dictionary>,
  ) {}

  async addWord(addWordDto: AddWordDto) {
    const newWord = new this.dictionaryModel(addWordDto);
    return newWord.save();
  }

  async getWords(): Promise<Dictionary[]> {
    return this.dictionaryModel.find().exec();
  }

  // async searchWord(query: string): Promise<Dictionary[]> {
  //   return this.dictionaryModel
  //     .find({
  //       $or: [
  //         { word: { $regex: query, $options: 'i' } },
  //         { translation: { $regex: query, $options: 'i' } },
  //       ],
  //     })
  //     .exec();
  // }

  async searchWord(query: string): Promise<Dictionary[]> {
    return this.dictionaryModel.find({ word: query }).exec();
  }

  async searchTranslation(query: string): Promise<Dictionary[]> {
    return this.dictionaryModel.find({ translation: query }).exec();
  }
}
