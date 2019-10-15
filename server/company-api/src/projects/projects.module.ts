import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectsModule])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
