import { Injectable } from '@nestjs/common';
import { ClassificationRepository } from './repositories/classification.repository';

@Injectable()
export class ClassificationService {
  constructor(private readonly cr: ClassificationRepository) {}

  // create(createClassificationDto: CreateClassificationDto) {
  //   return 'This action adds a new classification';
  // }

  // findAll() {
  //   return `This action returns all classification`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} classification`;
  // }

  // update(id: number, updateClassificationDto: UpdateClassificationDto) {
  //   return `This action updates a #${id} classification`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} classification`;
  // }
}
