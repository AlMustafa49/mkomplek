import { Module } from '@nestjs/common';
import { RumahService } from './rumah.service';
import { RumahController } from './rumah.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rumah } from './entities/rumah.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rumah])],
  controllers: [RumahController],
  providers: [RumahService]
})
export class RumahModule { }
