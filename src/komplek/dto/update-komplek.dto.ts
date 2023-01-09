import { PartialType } from '@nestjs/mapped-types';
import { CreateKomplekDto } from './create-komplek.dto';

export class UpdateKomplekDto extends PartialType(CreateKomplekDto) {}
