import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IuranrumahService } from './iuranrumah.service';
import { CreateIuranrumahDto } from './dto/create-iuranrumah.dto';
import { UpdateIuranrumahDto } from './dto/update-iuranrumah.dto';

@Controller('iuranRumah')
export class iuranController {
  constructor(private readonly iuranRumahService: IuranrumahService) { }

  @Post()
  async create(@Body() createIuranrumahDto: CreateIuranrumahDto) {
    return await this.iuranRumahService.create(createIuranrumahDto);
  }

  @Get()
  findAll() {
    return this.iuranRumahService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.iuranRumahService.findOne(+id);
  }

  @Get("search")
  search(@Query('keyword') keyword: string) {
    return this.iuranRumahService.search(keyword);
  }

  @Patch()
  update(@Body() updateIuranrumahDto: UpdateIuranrumahDto) {
    return this.iuranRumahService.update(updateIuranrumahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iuranRumahService.remove(+id);
  }
}
