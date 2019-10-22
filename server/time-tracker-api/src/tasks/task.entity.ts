import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    taskName:string;

    @Column({length:50})
    description:string;

    @Column()
    duration:number

    @Column({length:30})
    projectName:string;

    // @Column()
    // projectId:number;

    // @Column()
    // employeeId:number;

    @Column({length:30})
    employeeName:string;
}
