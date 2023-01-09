import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateIuranrumahDto } from './dto/create-iuranrumah.dto';
import { UpdateIuranrumahDto } from './dto/update-iuranrumah.dto';
import { IuranRumah } from './entities/iuranrumah.entity';

@Injectable()
export class IuranrumahService {
  constructor(
    @InjectRepository(IuranRumah)
    private iuranRumahRepository: Repository<IuranRumah>
  ) { }
  create(createIuranrumahDto: CreateIuranrumahDto): Promise<IuranRumah> {
    return this.iuranRumahRepository.save(createIuranrumahDto)
  }

  findAll() {
    return this.iuranRumahRepository.find()
  }

  async search(keyword: string) {
    const searchIuranRumah = await this.iuranRumahRepository.findBy({
      bulan: ILike("%" + keyword + "%"),
    })
    return searchIuranRumah
  }

  findOne(iuranRumahId: number) {
    return this.iuranRumahRepository.findOneBy({ iuranRumahId })
  }

  async update(updateIuranrumahDto: UpdateIuranrumahDto) {
    return this.iuranRumahRepository.save(updateIuranrumahDto);
  }

  async remove(iuranRumahId: number) {
    const iuranRumahUpdate = await this.findOne(iuranRumahId);
    return this.iuranRumahRepository.remove(iuranRumahUpdate);
  }

}
