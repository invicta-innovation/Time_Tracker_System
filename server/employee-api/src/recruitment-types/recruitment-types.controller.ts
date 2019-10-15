import { Controller, Get } from '@nestjs/common';
import { RecruitmentTypeDto } from './recruitment-type.dto';
import { RecruitmentTypesService } from './recruitment-types.service';

@Controller('recruitment-types')
export class RecruitmentTypesController {
    constructor(
        private readonly recruitmentService:RecruitmentTypesService
    ){}
    @Get()
    async getRecruitmentTypes():Promise<RecruitmentTypeDto[]>{
        return await this.recruitmentService.findAllRecruitmentTypes();
    }
    // @Get(':id')

}
