import { Repository } from "typeorm";
import { ProjectEntity } from "./projects.entity";

export class ProjectRepository extends Repository<ProjectEntity>{}
