import { Module } from '@nestjs/common';
import { RecruitmentTypesModule } from './recruitment-types/recruitment-types.module';
import config from "./config/config"

@Module({
  imports: [RecruitmentTypesModule,config]
})
export class AppModule {}
