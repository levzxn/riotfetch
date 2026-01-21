import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContaController } from './conta/conta.controller';
import { ContaService } from './conta/conta.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ContaController],
  providers: [ContaService],
})
export class AppModule {}
