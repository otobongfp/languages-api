import { Body, Controller, Post } from '@nestjs/common';
import { NounService } from './noun.service';
import { AddNounDto } from './dto/AddNoun.dto';

@Controller('noun')
export class NounController {
  constructor(private nounService: NounService) {}

  @Post()
  async addNoun(@Body() addNounDto: AddNounDto) {
    return this.nounService.addNoun(addNounDto);
  }
}
