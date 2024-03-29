import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Dictionary } from './Dictionary.schema';

@Schema()
export class Noun {
  @Prop({ required: true })
  word: string;

  @Prop()
  numeral: number;

  @Prop({ required: true })
  translation: string;

  @Prop({ required: true })
  type: string;
  //type name, animal, thing, place, food
}

export const NounSchema = SchemaFactory.createForClass(Noun);
