import { Injectable } from '@nestjs/common';
import { RecruitmentsRepository } from './recruitments.repository';
import { RecruitmentsDto } from './recruitments.dto';
import { UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RecruitmentsEntity } from './recruitments.entity';

@Injectable()
export class RecruitmentsService {
    constructor(
        @InjectRepository(RecruitmentsEntity)
        private readonly recruitmentsRepository: RecruitmentsRepository,
      ) {}
      findAll(): Promise<RecruitmentsEntity[]> {
        return this.recruitmentsRepository.find();
      }
      create(recruitmentsEntity: RecruitmentsEntity): Promise<RecruitmentsEntity> {
        return this.recruitmentsRepository.save(recruitmentsEntity);
      }
      update(recruitmentsEntity: RecruitmentsEntity): Promise<UpdateResult> {
        return this.recruitmentsRepository.update(recruitmentsEntity.id, recruitmentsEntity);
      }
      delete(id): Promise<DeleteResult> {
        return this.recruitmentsRepository.delete(id);
      }
}
