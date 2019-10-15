import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { from } from "rxjs";

@Entity()
export class RecruitmentTypeEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({length:50})
    typeName:string;
}
