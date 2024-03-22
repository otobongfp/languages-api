import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Dictionary {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  translation: string;

  meaning: string;

  usage: string;

  usageTranslation: string;

  langCode: string;
}

export const DictionarySchema = SchemaFactory.createForClass(Dictionary);
