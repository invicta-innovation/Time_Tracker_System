import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignationModule } from './designation/designation.module';
import "reflect-metadata";
import config from "./config/config"

@Module({
  imports: [DesignationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
