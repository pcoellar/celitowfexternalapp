import { Module } from '@nestjs/common';
import { WebhookController } from './presentation-layer/controllers/webhook/webhook.controller';

@Module({
    controllers: [
        WebhookController,
      ]    
})
export class WfexternalappemulatorModule {}
