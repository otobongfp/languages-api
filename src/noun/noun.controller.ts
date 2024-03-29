import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { NounService } from './noun.service';
import { AddNounDto } from './dto/AddNoun.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Noun')
@Controller('noun')
export class NounController {
  constructor(private nounService: NounService) {}

  @Post()
  async addNoun(@Body() addNounDto: AddNounDto) {
    return this.nounService.addNoun(addNounDto);
  }

  @Get('type')
  async getNounsType(@Query('query') query: string) {
    return this.nounService.getNounsByType(query);
  }

  @Get()
  async getNoun(@Query('query') query: string, @Query('type') type: string) {
    return this.nounService.getNoun(query, type);
  }
}
