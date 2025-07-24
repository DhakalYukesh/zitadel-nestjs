import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
    imports: [AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }