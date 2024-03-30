import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Noun } from 'src/Schema/Noun.schema';
import { AddNounDto } from './dto/AddNoun.dto';

@Injectable()
export class NounService {
  constructor(@InjectModel(Noun.name) private nounModel: Model<Noun>) {}

  async addNoun(addNounDto: AddNounDto) {
    const newWord = new this.nounModel(addNounDto);
    return newWord.save();
  }

  async getNounsByType(query: string): Promise<Noun[]> {
    return this.nounModel.find({ type: query }).exec();
  }

  async getNoun(query: string, type?: string): Promise<Noun[]> {
    const filter: any = {
      $or: [
        { word: { $regex: new RegExp(query, 'i') } },
        { translation: { $regex: new RegExp(query, 'i') } },
      ],
    };

    if (type) {
      filter.type = type;
    }
    return this.nounModel.find(filter).exec();
  }

  async searchEn(query: string): Promise<Noun[]> {
    return this.nounModel.find({ translation: query }).exec();
  }
}
