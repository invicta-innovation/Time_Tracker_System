import { Repository } from "typeorm";
import { TaskEntity } from "./task.entity";

export class TaskRepository extends Repository<TaskEntity> {}
