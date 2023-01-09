import { Test, TestingModule } from '@nestjs/testing';
import { IuranrumahService } from './iuranrumah.service';

describe('IuranrumahService', () => {
  let service: IuranrumahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IuranrumahService],
    }).compile();

    service = module.get<IuranrumahService>(IuranrumahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
