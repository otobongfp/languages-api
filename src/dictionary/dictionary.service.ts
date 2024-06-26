import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dictionary } from 'src/Schema/Dictionary.schema';
import { WordType } from 'src/common/types/dictionaryTypes';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectModel(Dictionary.name)
    private dictionaryModel: Model<Dictionary>,
  ) {}

  async addWord(addWordDto: WordType) {
    const newWord = new this.dictionaryModel(addWordDto);
    return newWord.save();
  }

  async getWords(page: number = 1, limit: number = 10): Promise<Dictionary[]> {
    const skip = (page - 1) * limit;
    return this.dictionaryModel.find().skip(skip).limit(limit).exec();
  }

  async searchWord(query: string): Promise<Dictionary[]> {
    return this.dictionaryModel
      .find({
        $or: [
          { word: { $regex: query, $options: 'i' } },
          { translation: { $regex: query, $options: 'i' } },
        ],
      })
      .exec();
  }

  // async searchWord(query: string): Promise<Dictionary[]> {
  //   return this.dictionaryModel.find({ word: query }).exec();
  // }

  // async searchTranslation(query: string): Promise<Dictionary[]> {
  //   return this.dictionaryModel.find({ translation: query }).exec();
  // }
}
