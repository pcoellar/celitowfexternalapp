import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('webhook')
@ApiTags('Webhook')
@ApiResponse({ status: 500, description: 'Internal error' })
export class WebhookController {
    @Post()
    async webhook(@Body() payload: any) {
        console.log("WebHook called with payload: ", payload);
        return "OK";
    }
}
