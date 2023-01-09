import { Test, TestingModule } from '@nestjs/testing';
import { RumahService } from './rumah.service';

describe('RumahService', () => {
  let service: RumahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RumahService],
    }).compile();

    service = module.get<RumahService>(RumahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
