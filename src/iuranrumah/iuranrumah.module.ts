import { Module } from '@nestjs/common';
import { IuranrumahService } from './iuranrumah.service';
import { IuranrumahController } from './iuranrumah.controller';

@Module({
  controllers: [IuranrumahController],
  providers: [IuranrumahService]
})
export class IuranrumahModule {}
