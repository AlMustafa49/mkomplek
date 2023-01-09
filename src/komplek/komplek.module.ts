import { Module } from '@nestjs/common';
import { KomplekService } from './komplek.service';
import { KomplekController } from './komplek.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Komplek } from './entities/komplek.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Komplek])],
  controllers: [KomplekController],
  providers: [KomplekService]
})
export class KomplekModule { }
