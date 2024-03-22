import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Noun {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  meaning: string;

  @Prop({ required: true })
  type: string;
  //type name, animal, thing, place, food
}
