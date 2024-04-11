import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddNounDto {
  @IsNotEmpty()
  @IsString()
  word: string;

  @IsNotEmpty()
  @IsString()
  translation: string;

  @IsOptional()
  numeral: number;

  @IsNotEmpty()
  @IsString()
  type: string;
}
