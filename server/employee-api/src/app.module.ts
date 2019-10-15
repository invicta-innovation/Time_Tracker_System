import { Module } from '@nestjs/common';
import config from "./config/config"
import { RecruitmentTypesModule } from './recruitment-types/recruitment-types.module';
import { DesignationModule } from './designation/designation.module';

@Module({
  imports: [RecruitmentTypesModule,config, DesignationModule]
})
export class AppModule {}
