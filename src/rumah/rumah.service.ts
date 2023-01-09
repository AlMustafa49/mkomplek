import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateRumahDto } from './dto/create-rumah.dto';
import { UpdateRumahDto } from './dto/update-rumah.dto';
import { Rumah } from './entities/rumah.entity';

@Injectable()
export class RumahService {
  constructor(
    @InjectRepository(Rumah)
    private rumahRepository: Repository<Rumah>
  ) { }
  create(createRumahDto: CreateRumahDto): Promise<Rumah> {
    return this.rumahRepository.save(createRumahDto);
  }

  findAll() {
    return this.rumahRepository.find();
  }

  async search(keyword: string) {
    // console.log(keyword)
    const searchRumah = await this.rumahRepository.findBy({
      norumah: ILike("%" + keyword + "%"),
    })
    return searchRumah
  }

  findOne(id: number) {
    return this.rumahRepository.findOneBy({ id });
  }
  async update(updateRumahDto: UpdateRumahDto) {
    return this.rumahRepository.save(updateRumahDto);
  }

  async remove(id: number) {
    const rumahUpdate = await this.findOne(id);
    return this.rumahRepository.remove(rumahUpdate);
  }
}
