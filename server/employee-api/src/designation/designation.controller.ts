import { Controller, Get, Req, Res, Post, Body, } from '@nestjs/common';
import { DesignationDto } from './designation.dto';

@Controller('designation')
export class DesignationController {
    // @Get()
    // findAll(@Req() req: Request, @Res() res: Response) {
    //     // return 'Please Replace this with something'
    //     console.log(req.url)
    // }

    // @Post()
    // create(@Body() designationDto: DesignationDto): string {
    //     return `Age: ${designationDto.designation}`;
    // }

}