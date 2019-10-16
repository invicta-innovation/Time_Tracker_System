import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { DesignationEntity } from './designation.entity';
import { DesignationRepository } from './designation.repository';
import { DesignationDto } from './designation.dto';

@Injectable()
export class DesignationService {
        constructor(
            @InjectRepository(DesignationEntity)
            private readonly designationRepository:DesignationRepository
        ){}
    
        findAllDesignationTypes(): Promise<DesignationDto[]>{
            return this.designationRepository.find();
        }

        findById(id): Promise<DesignationDto>{
            return this.designationRepository.findOne(id);
        }

         
}
