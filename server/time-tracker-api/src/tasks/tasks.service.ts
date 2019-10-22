import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { TaskRepository } from './task.repository';
import { TaskDto } from './task.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable({scope:Scope.REQUEST})
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository:TaskRepository
    ){}
    createTask(taskDto:TaskDto){
        return this.taskRepository.save(taskDto)
    }
    findAllTasks():Promise<TaskDto[]>{
        return this.taskRepository.find();
    }
    findTaskById(id):Promise<TaskDto>{
        return this.taskRepository.findOne(id);
    }
    editTaskById(id,taskDto:TaskDto):Promise<UpdateResult>{
        return this.taskRepository.update(taskDto,id)
    }
    deleteTaskById(id):Promise<DeleteResult>{
        return this.taskRepository.delete(id);
    }

}
