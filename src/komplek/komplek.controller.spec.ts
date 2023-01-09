import { Test, TestingModule } from '@nestjs/testing';
import { KomplekController } from './komplek.controller';
import { KomplekService } from './komplek.service';

describe('KomplekController', () => {
  let controller: KomplekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KomplekController],
      providers: [KomplekService],
    }).compile();

    controller = module.get<KomplekController>(KomplekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
