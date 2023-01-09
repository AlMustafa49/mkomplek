import { Test, TestingModule } from '@nestjs/testing';
import { KomplekService } from './komplek.service';

describe('KomplekService', () => {
  let service: KomplekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KomplekService],
    }).compile();

    service = module.get<KomplekService>(KomplekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
