import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './apps/test/test.module';
import {CoreModule} from "./apps/core/core.module";

@Module({
  imports: [TestModule,CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
