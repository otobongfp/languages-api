import { Body, Controller, Get, Post } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { AddWordDto } from './dto/AddWord.dto';

@Controller('dictionary')
export class DictionaryController {
  constructor(private dictionaryService: DictionaryService) {}

  @Post()
  //   @UsePipes(new ValidationPipe())
  AddWord(@Body() addWordDto: AddWordDto) {
    console.log(addWordDto);
    return this.dictionaryService.addWord(addWordDto);
  }

  @Get()
  GetDictionary() {
    return 'The Words';
  }
}
