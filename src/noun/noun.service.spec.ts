import { Test, TestingModule } from '@nestjs/testing';
import { NounService } from './noun.service';

describe('NounService', () => {
  let service: NounService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NounService],
    }).compile();

    service = module.get<NounService>(NounService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
