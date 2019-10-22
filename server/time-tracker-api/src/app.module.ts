import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import config from './config/config';
@Module({
  imports: [config ,TasksModule],

})
export class AppModule {}
