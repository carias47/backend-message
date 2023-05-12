import { PassportModule } from '@nestjs/passport';

import { UsuarioEntity } from './../usuario/usuario.entity';
import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UsuarioRepository } from './usuario.repository';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioEntity, UsuarioRepository]),
    PassportModule.register({}),
  ],
  providers: [UsuarioService, ConfigService],
  controllers: [UsuarioController],
  exports: [PassportModule],
})
export class UsuarioModule {}
