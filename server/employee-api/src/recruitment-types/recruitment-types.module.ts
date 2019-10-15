import { Module } from '@nestjs/common';
import { RecruitmentTypesController } from './recruitment-types.controller';
import { RecruitmentTypesService } from './recruitment-types.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecruitmentTypeEntity } from './recruitment-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RecruitmentTypeEntity])],
  controllers: [RecruitmentTypesController],
  providers: [RecruitmentTypesService]
})
export class RecruitmentTypesModule {}
