import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateIuranDto } from './dto/create-iuran.dto';
import { UpdateIuranDto } from './dto/update-iuran.dto';
import { Iuran } from './entities/iuran.entity';

@Injectable()
export class IuranService {
  constructor(
    @InjectRepository(Iuran)
    private iuranRepository: Repository<Iuran>
  ) { }
  create(createIuranDto: CreateIuranDto): Promise<Iuran> {
    return this.iuranRepository.save(createIuranDto);
  }

  findAll() {
    return this.iuranRepository.find();
  }

  async search(keyword: string) {
    const searchIuran = await this.iuranRepository.findBy({
      nama: ILike("%" + keyword + "%"),
    })
    return searchIuran
  }

  findOne(id: number) {
    return this.iuranRepository.findOneBy({ id });
  }

  async update(updateIuranDto: UpdateIuranDto) {
    return this.iuranRepository.save(updateIuranDto);
  }

  async remove(id: number) {
    const iuranUpdate = await this.findOne(id);
    return this.iuranRepository.remove(iuranUpdate);
  }

}
