import { Module } from '@nestjs/common';
import { IuranService } from './iuran.service';
import { IuranController } from './iuran.controller';
import { Iuran } from './entities/iuran.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Iuran])],
  controllers: [IuranController],
  providers: [IuranService]
})
export class IuranModule { }
