
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecruitmentsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    employeeName:string;

    @Column({ length: 25 })
    companyName:string;

    @Column() 
    startedDate:Date;

    @Column() 
    endDate:Date;

    @Column() 
    workRole:string;

    @Column() 
    employeeStatus:string;

    @Column() 
    designation:string;
}
