import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ProjectEntity {
@PrimaryGeneratedColumn()
id :number;

@Column()
projectName: string;

@Column()
startedDate: Date;

@Column()
finishedDate:Date;

@Column()
description:string;

@Column()
projectStatus:string;
}
