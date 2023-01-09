import { Test, TestingModule } from '@nestjs/testing';
import { IuranrumahController } from './iuranrumah.controller';
import { IuranrumahService } from './iuranrumah.service';

describe('IuranrumahController', () => {
  let controller: IuranrumahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IuranrumahController],
      providers: [IuranrumahService],
    }).compile();

    controller = module.get<IuranrumahController>(IuranrumahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
