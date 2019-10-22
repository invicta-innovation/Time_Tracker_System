import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './task.dto';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly taskService:TasksService
    ){}

    @Get()
    async getTasks():Promise<TaskDto[]>{
        return await this.taskService.findAllTasks();
    }
    @Post()
    async createTask(@Body() taskDto:TaskDto):Promise<TaskDto>{
        return await this.taskService.createTask(taskDto);
    }
    @Get(':id')
    async getTaskById(@Param('id') id):Promise<TaskDto>{
        return await this.taskService.findTaskById(id);
    }
    @Put(':id')
    async updateTaskById(@Param('id') id, @Body() taskDto:TaskDto):Promise<UpdateResult>{
        return await this.taskService.editTaskById(taskDto,id);
    }
    @Delete(':id')
    async deleteTaskById(@Param('id') id):Promise<DeleteResult>{
        return await this.taskService.deleteTaskById(id);
    }
}
