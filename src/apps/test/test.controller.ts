import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  runTestScript(@Body() body) {
    const { code, response } = body;
    return this.testService.runTestScript({ code, response });
  }
}
