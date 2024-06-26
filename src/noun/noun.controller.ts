import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { NounService } from './noun.service';
import { Noun } from '../Schema/Noun.schema';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Noun')
@Controller('noun')
export class NounController {
  constructor(private nounService: NounService) {}

  @Post()
  async addNoun(@Body() noun: Noun) {
    return this.nounService.addNoun(noun);
  }

  @Get('type')
  @ApiOperation({
    summary: 'search for nouns in the same group',
    description: 'E.g /type?query=number. Nouns can be a number, animal, etc',
  })
  async getNounsType(@Query('query') query: string) {
    return this.nounService.getNounsByType(query);
  }

  @Get()
  @ApiOperation({
    summary:
      'Search for nouns using the word in either the local dialect or english',
    description:
      'By passing two params e.g /noun/?query=ita&type=number. This helps you get the exact word in that class',
  })
  async getNoun(@Query('query') query: string, @Query('type') type: string) {
    return this.nounService.getNoun(query, type);
  }

  // @Get('en')
  // @ApiOperation({
  //   summary: 'Search using the english translation',
  //   description: 'e.g /en/query=two',
  // })
  // async getEn(@Query('query') query: string) {
  //   return this.nounService.searchEn(query);
  // }
}
