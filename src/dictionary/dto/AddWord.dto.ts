import { IsNotEmpty, IsString } from 'class-validator';

export class AddWordDto {
  @IsNotEmpty()
  @IsString()
  word: string;

  @IsNotEmpty()
  @IsString()
  translation: string;

  @IsNotEmpty()
  @IsString()
  meaning: string;
}