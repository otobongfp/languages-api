import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Noun } from 'src/Schema/Noun.schema';
import { AddNounDto } from './dto/AddNoun.dto';

@Injectable()
export class NounService {
  constructor(@InjectModel(Noun.name) private nounModel: Model<Noun>) {}

  addNoun(addNounDto: AddNounDto) {
    const newWord = new this.nounModel(addNounDto);
    return newWord.save();
  }
}
