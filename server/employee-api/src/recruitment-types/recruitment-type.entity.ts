import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class RecruitmentTypeEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({length:50})
    typeName:string;
}
