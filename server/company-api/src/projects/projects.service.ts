import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './projects.entity';
import { ProjectRepository } from './projects.repository';
import { ProjectDto } from './project.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable({scope:Scope.REQUEST})
export class ProjectsService {
    constructor(
        @InjectRepository(ProjectEntity)
        private readonly projectRepository : ProjectRepository,
    ){}
    findAll():Promise<ProjectDto[]>{
        return this.projectRepository.find();
    }
    create(projectDto:ProjectDto):Promise<ProjectDto>{
        return this.projectRepository.save(projectDto);
    }
    update(projectDto:ProjectDto):Promise<UpdateResult>{
        return this.projectRepository.update(projectDto.id,projectDto);
    }
    delete(id):Promise<DeleteResult>{
        return this.projectRepository.delete(id);
    }
}
