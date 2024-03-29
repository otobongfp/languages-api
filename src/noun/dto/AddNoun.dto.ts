import { IsNotEmpty, IsString } from 'class-validator';

export class AddNounDto {
  @IsNotEmpty()
  @IsString()
  word: string;

  @IsNotEmpty()
  @IsString()
  translation: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
