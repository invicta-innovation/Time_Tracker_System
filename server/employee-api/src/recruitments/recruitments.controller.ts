import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RecruitmentsDto } from './recruitments.dto';
import { RecruitmentsService } from './recruitments.service';

@Controller('employee/recruitments')
export class RecruitmentsController {
  constructor(private recruitmentsService: RecruitmentsService) {}
  @Get()
  index(): Promise<RecruitmentsDto[]> {
    return this.recruitmentsService.findAll();
  }
  @Post()
  async create(@Body() recruitments: RecruitmentsDto): Promise<any> {
    return this.recruitmentsService.create(recruitments);
  }
  @Put(':id')
  async update(
    @Param('id') id,
    @Body() recruitments: RecruitmentsDto,
  ): Promise<any> {
    return this.recruitmentsService.update(recruitments);
  }
  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.recruitmentsService.delete(id);
  }
}
