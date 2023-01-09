import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Komplek } from './komplek/entities/komplek.entity';
import { Rumah } from './rumah/entities/rumah.entity';
import { RumahModule } from './rumah/rumah.module';
import { IuranModule } from './iuran/iuran.module';
import { Iuran } from './iuran/entities/iuran.entity';
import { KomplekModule } from './komplek/komplek.module';
import { IuranRumah } from './iuranrumah/entities/iuranrumah.entity';
import { IuranrumahModule } from './iuranrumah/iuranrumah.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'barerot49',
      database: 'mkomplek',
      entities: [Rumah, Komplek, Iuran, IuranRumah],
      synchronize: true
    }),
    KomplekModule,
    RumahModule,
    IuranModule,
    IuranrumahModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
