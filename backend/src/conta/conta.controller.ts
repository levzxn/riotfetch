import { Controller, Get, Query, Param } from '@nestjs/common';
import { ContaService } from './conta.service';
import { BuscarContaDto } from './dto/buscar-conta.dto';

@Controller('conta')
export class ContaController {
    constructor(private readonly contaService: ContaService) { }

    @Get()
    buscarConta(@Query() dto: BuscarContaDto) {
        return this.contaService.buscarPorRiotID(dto.nomeConta, dto.tagLine);
    }

    @Get('matches/:puuid')
    buscarPartidasPorPuuid(@Param('puuid') puuid: string) {
        return this.contaService.buscarPartidasPorPuuid(puuid);
    }

    @Get('match/:matchId')
    buscarDetalhesPartida(@Param('matchId') matchId: string) {
        return this.contaService.buscarDetalhesPartida(matchId);
    }

}
