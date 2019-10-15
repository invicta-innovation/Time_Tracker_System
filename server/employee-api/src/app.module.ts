import { Module } from '@nestjs/common';
import { RecruitmentTypesModule } from './recruitment-types/recruitment-types.module';
import { DesignationModule } from './designation/designation.module';
import config from "./config/config"

@Module({
  imports: [RecruitmentTypesModule, DesignationModule, config]
})
export class AppModule {}
