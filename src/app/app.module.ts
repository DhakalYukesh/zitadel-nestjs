import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from '../auth/auth.module.js';
import { AdapterModule } from '../lib/adapter.module.js';

@Module({
    imports: [AuthModule, AdapterModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }