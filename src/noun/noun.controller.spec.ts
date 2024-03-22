import { Test, TestingModule } from '@nestjs/testing';
import { NounController } from './noun.controller';

describe('NounController', () => {
  let controller: NounController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NounController],
    }).compile();

    controller = module.get<NounController>(NounController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
