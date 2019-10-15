import { Injectable, Scope } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { RecruitmentTypeRepository } from './recruitment-type.repository';
import { RecruitmentTypeEntity } from './recruitment-type.entity';
import { RecruitmentTypeDto } from './recruitment-type.dto';


@Injectable({ scope: Scope.REQUEST })
export class RecruitmentTypesService {
    constructor(
        @InjectRepository(RecruitmentTypeEntity)
        private readonly recruitmentTypeRepository:RecruitmentTypeRepository
    ){}

    findAllRecruitmentTypes(): Promise<RecruitmentTypeDto[]>{
        return this.recruitmentTypeRepository.find();
    }
    // createRecruitment()

}
