import { Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { RecruitmentTypeDto} from './recruitment-type.dto';
import { RecruitmentTypesService} from './recruitment-types.service';

@Controller('employee/recruitment-types') 
export class RecruitmentTypesController {
    constructor(private readonly recruitmentService:RecruitmentTypesService) {}
    
    @Get() async getRecruitmentTypes():Promise<RecruitmentTypeDto[] > {
        return await this.recruitmentService.findAllRecruitmentTypes();
    }

    @Post() async createRecruitmentType(@Body() recruitmentTypeDto: RecruitmentTypeDto): Promise<RecruitmentTypeDto> {
        return await this.recruitmentService.createRecruitment(recruitmentTypeDto);
    }

    @Get(':id') async findRecruitmentType(@Param('id') id): Promise<RecruitmentTypeDto> {
        return await this.recruitmentService.findById(id);
    }

    @Put(':id') async updateRecruitmentType(@Param('id') id , @Body() recruitmentTypeDto:RecruitmentTypeDto):Promise<any > {
        return await this.recruitmentService.updateById(id,recruitmentTypeDto);
    }

    @Delete(':id') async deleteRecruitmentType(@Param('id') id):Promise<any > {
        return await this.recruitmentService.deleteById(id);
    }
}
