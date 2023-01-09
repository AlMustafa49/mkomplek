import { Test, TestingModule } from '@nestjs/testing';
import { RumahController } from './rumah.controller';
import { RumahService } from './rumah.service';

describe('RumahController', () => {
  let controller: RumahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RumahController],
      providers: [RumahService],
    }).compile();

    controller = module.get<RumahController>(RumahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
