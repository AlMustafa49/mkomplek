import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IuranService } from './iuran.service';
import { CreateIuranDto } from './dto/create-iuran.dto';
import { UpdateIuranDto } from './dto/update-iuran.dto';

@Controller('iuran')
export class IuranController {
  constructor(private readonly iuranService: IuranService) { }

  @Post()
  create(@Body() createIuranDto: CreateIuranDto) {
    return this.iuranService.create(createIuranDto);
  }

  @Get()
  findAll() {
    return this.iuranService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.iuranService.findOne(+id);
  }

  @Get("search")
  search(@Query('keyword') keyword: string) {
    return this.iuranService.search(keyword);
  }

  @Patch()
  update(@Body() updateIuranDto: UpdateIuranDto) {
    return this.iuranService.update(updateIuranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iuranService.remove(+id);
  }
}
