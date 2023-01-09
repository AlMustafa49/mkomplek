import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KomplekService } from './komplek.service';
import { CreateKomplekDto } from './dto/create-komplek.dto';
import { UpdateKomplekDto } from './dto/update-komplek.dto';

@Controller('komplek')
export class KomplekController {
  constructor(private readonly komplekService: KomplekService) { }

  @Post()
  async create(@Body() createKomplekDto: CreateKomplekDto) {
    return await this.komplekService.create(createKomplekDto);
  }

  @Get()
  findAll() {
    return this.komplekService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.komplekService.findOne(+id);
  }

  @Get("search")
  search(@Query('keyword') keyword: string) {
    return this.komplekService.search(keyword);
  }

  @Patch()
  update(@Body() updateKomplekDto: UpdateKomplekDto) {
    return this.komplekService.update(updateKomplekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.komplekService.remove(+id);
  }
}
