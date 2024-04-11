import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Dictionary {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  translation: string;

  @Prop({ required: true })
  meaning: string;

  @Prop({ required: true })
  usage: string;

  @Prop({ required: true })
  usageTranslation: string;

  @Prop({ required: true })
  langCode: string;
}

export const DictionarySchema = SchemaFactory.createForClass(Dictionary);
