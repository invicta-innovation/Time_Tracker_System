import { Module } from '@nestjs/common';
import { DesignationService } from './designation.service';
import { DesignationController } from './designation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignationEntity } from './designation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        DesignationEntity,
        
        ]
    )],
    providers: [DesignationService],
    controllers: [DesignationController]
})
export class DesignationModule { }
