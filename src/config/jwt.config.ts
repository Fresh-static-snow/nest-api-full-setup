import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { Env } from '../models/Env';

export const getJWTConfig = async (
  configService: ConfigService<Env>,
): Promise<JwtModuleOptions> => {
  return {
    secret: configService.get('JWT_SECRET'),
    secretOrKeyProvider: configService.get('JWT_SECRET'),
    privateKey: configService.get('JWT_SECRET'),
  };
};
