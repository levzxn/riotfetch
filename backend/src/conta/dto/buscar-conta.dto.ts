import { IsString } from 'class-validator';

export class BuscarContaDto {
  @IsString()
  nomeConta: string;

  @IsString()
  tagLine: string;
}
