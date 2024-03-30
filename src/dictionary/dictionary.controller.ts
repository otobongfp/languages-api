import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { AddWordDto } from './dto/AddWord.dto';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Dictionary } from 'src/Schema/Dictionary.schema';

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

  @Get('/words')
  @ApiResponse({ status: 200 })
  @ApiOperation({ summary: 'Get words with pagination' })
  @ApiQuery({ name: 'page', description: 'Page number', required: false })
  @ApiQuery({
    name: 'limit',
    description: 'Number of items per page',
    required: false,
  })
  async getWords(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<Dictionary[]> {
    return this.dictionaryService.getWords(page, limit);
  }

  @Get('word')
  async searchWord(@Query('query') query: string) {
    return this.dictionaryService.searchWord(query);
  }

  // @Get('en')
  // @ApiOperation({
  //   summary: 'search for the word in English',
  //   description: 'e.g /en/?query=love',
  // })
  // async searchTranslation(@Query('query') query: string) {
  //   return this.dictionaryService.searchTranslation(query);
  // }
}
