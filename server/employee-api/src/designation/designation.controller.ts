import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DesignationDto } from './designation.dto';
import { DesignationService } from './designation.service';

@Controller('designation')
export class DesignationController {
    constructor(
        private readonly designationService: DesignationService,
    ){}

    @Get()
    async findAll(): Promise<DesignationDto[]> {
        return await this.designationService.findAllDesignationTypes();
        //console.log(req.url)
    }

    @Get(':id')
    async findById(@Param('id') id): Promise<DesignationDto> {
        return await this.designationService.findById(id);
        //console.log(req.url)
    }

    @Post()
    createDesignation(@Body() designationDto: DesignationDto): string {
        return `Age: ${designationDto.designation}`;
    }

}