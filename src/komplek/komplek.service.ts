import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateKomplekDto } from './dto/create-komplek.dto';
import { UpdateKomplekDto } from './dto/update-komplek.dto';
import { Komplek } from './entities/komplek.entity';

@Injectable()
export class KomplekService {
  constructor(
    @InjectRepository(Komplek)
    private komplekRepository: Repository<Komplek>
  ) { }
  create(createKomplekDto: CreateKomplekDto): Promise<Komplek> {
    return this.komplekRepository.save(createKomplekDto)
  }

  findAll() {
    return this.komplekRepository.find()
  }

  async search(keyword: string) {
    const searchKomplek = await this.komplekRepository.findBy({
      nama: ILike("%" + keyword + "%"),
    })
    return searchKomplek
  }

  findOne(id: number) {
    return this.komplekRepository.findOneBy({ id })
  }

  async update(updateKomplekDto: UpdateKomplekDto) {
    return this.komplekRepository.save(updateKomplekDto);
  }

  async remove(id: number) {
    const komplekUpdate = await this.findOne(id);
    return this.komplekRepository.remove(komplekUpdate);
  }

}
