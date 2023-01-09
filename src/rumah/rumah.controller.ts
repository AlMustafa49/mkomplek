import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RumahService } from './rumah.service';
import { CreateRumahDto } from './dto/create-rumah.dto';
import { UpdateRumahDto } from './dto/update-rumah.dto';

@Controller('rumah')
export class RumahController {
  constructor(private readonly rumahService: RumahService) { }

  @Post()
  async create(@Body() createRumahDto: CreateRumahDto) {
    return await this.rumahService.create(createRumahDto);
  }

  @Get()
  findAll() {
    return this.rumahService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.rumahService.findOne(+id);
  }

  @Get("search")
  search(@Query('keyword') keyword: string) {
    console.log(keyword);
    return this.rumahService.search(keyword);
  }

  @Patch()
  update(@Body() updateRumahDto: UpdateRumahDto) {
    return this.rumahService.update(updateRumahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rumahService.remove(+id);
  }
}
