import { Injectable, Scope } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { RecruitmentTypeRepository } from './recruitment-type.repository';
import { RecruitmentTypeEntity } from './recruitment-type.entity';
import { RecruitmentTypeDto } from './recruitment-type.dto';
import { DeleteResult, UpdateResult } from 'typeorm';


@Injectable({ scope: Scope.REQUEST })
export class RecruitmentTypesService {
    constructor(
        @InjectRepository(RecruitmentTypeEntity)
        private readonly recruitmentTypeRepository:RecruitmentTypeRepository
    ){}

    createRecruitment(recruitmentTypeDto:RecruitmentTypeDto){
        return this.recruitmentTypeRepository.save(recruitmentTypeDto)
    }

    findAllRecruitmentTypes(): Promise<RecruitmentTypeDto[]>{
        return this.recruitmentTypeRepository.find();
    }

    findById(id):Promise<RecruitmentTypeDto>{
        return this.recruitmentTypeRepository.findOne(id)
    }

    updateById(id,recruitmentTypeDto:RecruitmentTypeDto) :Promise<UpdateResult>{
        return this.recruitmentTypeRepository.update(id,recruitmentTypeDto);
    }

    deleteById(id) : Promise<DeleteResult>{
        return this.recruitmentTypeRepository.delete(id);
    }
}
