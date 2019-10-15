import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class CompanyEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    companyName:string;

    @Column()
    telNo:number;

    @Column({length:100})
    email:string;

    @Column({length:500})
    address:string;
}

