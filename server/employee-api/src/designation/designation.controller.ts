import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DesignationDto } from './designation.dto';
import { DesignationService } from './designation.service';

@Controller('employee/designation')
export class DesignationController {
    constructor(
        private readonly designationService: DesignationService,
    ) { }

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
    async createDesignation(@Body() designationDto: DesignationDto): Promise<DesignationDto> {
        return await this.designationService.createDesignation(designationDto);
    }

    @Delete(':id')
    async deleteDesignation(@Param('id') id): Promise<any>{
        return await this.designationService.deleteDesignation(id);
    }

    @Put(':id')
    async updateDesignation(@Param('id') id, @Body() designationDto: DesignationDto): Promise<any>{

        let resultRespone;
        let designationDtoTemp;
        await this.designationService.updateDesignation(id, designationDto).then(response => 
            resultRespone = response
            );
            let x = resultRespone.affected
            console.log(x)
        if(x !== 0){
            designationDtoTemp = {
                id: id,
                designation: designationDto.designation,
            }
            return designationDtoTemp;
        }
        return null;
    }

}