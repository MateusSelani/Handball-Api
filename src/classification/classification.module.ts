import { Module } from '@nestjs/common';
import { ClassificationController } from './classification.controller';
import { ClassificationService } from './classification.service';
import { ClassificationRepository } from './repositories/classification.repository';

@Module({
  controllers: [ClassificationController],
  providers: [ClassificationService, ClassificationRepository]
})
export class ClassificationModule {}
