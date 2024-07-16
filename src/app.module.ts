import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { WfexternalappemulatorModule } from './wfexternalappemulator/wfexternalappemulator.module';

@Module({
  imports: [CommonModule, WfexternalappemulatorModule],
})
export class AppModule {}
