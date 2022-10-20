import { Championship } from './../championship/entities/championship.entity';
import { Classification } from './entities/classification.entity';
import { Module } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { ClassificationController } from './classification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Classification])],
  controllers: [ClassificationController],
  providers: [ClassificationService]
})
export class ClassificationModule {}
