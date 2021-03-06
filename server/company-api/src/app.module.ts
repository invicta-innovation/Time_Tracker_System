import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { CompanyModule } from './company/company.module';
import config from "./config/config";

@Module({
  imports: [CompanyModule,ProjectsModule,config],
})
export class AppModule {}
