import { Module } from '@nestjs/common';
import { RecruitmentTypesModule } from './recruitment-types/recruitment-types.module';
import config from "./config/config"

@Module({
  imports: [config,RecruitmentTypesModule]
})
export class AppModule {}
