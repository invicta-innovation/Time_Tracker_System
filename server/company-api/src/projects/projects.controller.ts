import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectEntity } from './projects.entity';

@Controller('projects')
export class ProjectsController {
    constructor(private projectService :ProjectsService){}

    @Get()
    index():Promise<ProjectEntity[]>{
        return this.projectService.findAll();
    }
    @Post()
    async create(@Body() project:ProjectEntity):Promise<any>{
        return this.projectService.create(project);
    }
    @Put()
    async update(@Param('id') id, @Body() project:ProjectEntity):Promise<any>{
        project.id =Number(id);
        console.log('Update #'+ project.id);
        return this.projectService.update(project);
    }
    @Delete(':id')
    async delete(@Param('id')id):Promise<any>{
        return this.projectService.delete(id);
    }
}
