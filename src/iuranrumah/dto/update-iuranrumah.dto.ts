import { PartialType } from '@nestjs/mapped-types';
import { CreateIuranrumahDto } from './create-iuranrumah.dto';

export class UpdateIuranrumahDto extends PartialType(CreateIuranrumahDto) {}
