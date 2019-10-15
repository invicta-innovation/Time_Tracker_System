import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class DesignationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;
}
