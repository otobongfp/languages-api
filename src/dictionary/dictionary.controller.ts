import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { AddWordDto } from './dto/AddWord.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Dictionary')
@Controller('dictionary')
export class DictionaryController {
  constructor(private dictionaryService: DictionaryService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Add a new word into the dictionary',
  })
  async addWord(@Body() addWordDto: AddWordDto) {
    return this.dictionaryService.addWord(addWordDto);
  }

  @Get()
  async getDictionary() {
    return this.dictionaryService.getWords();
  }

  @Get('word')
  async searchWord(@Query('query') query: string) {
    return this.dictionaryService.searchWord(query);
  }

  @Get('translation')
  async searchTranslation(@Query('query') query: string) {
    return this.dictionaryService.searchTranslation(query);
  }
}
