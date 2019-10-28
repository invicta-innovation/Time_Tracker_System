import { Module } from '@nestjs/common';
import { RecruitmentsService } from './recruitments.service';
import { RecruitmentsController } from './recruitments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecruitmentsEntity } from './recruitments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecruitmentsEntity])],
  providers: [RecruitmentsService],
  controllers: [RecruitmentsController]
})
export class RecruitmentsModule {}
