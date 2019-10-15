import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { CompanyModule } from './company/company.module';
import config from "./config/config";

@Module({
  imports: [CompanyModule,config],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
