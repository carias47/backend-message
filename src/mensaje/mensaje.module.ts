import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeEntity } from './dto/mensaje.entity';
import { MensajeService } from './dto/mensaje.service';
import { MensajeController } from './dto/mensaje.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MensajeEntity])],
  providers: [MensajeService],
  controllers: [MensajeController],
})
export class MensajeModule {}
