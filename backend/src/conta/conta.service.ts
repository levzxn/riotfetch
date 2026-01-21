import { Injectable, HttpException } from '@nestjs/common';

export interface RiotAccount {
    puuid: string
    gameName: string
    tagLine: string
    id: string
    accountId: string
}

@Injectable()
export class ContaService {
    private readonly riotApiUrl = process.env.RIOT_API_URL || '';
    private readonly riotApiKey = process.env.RIOT_API_KEY || '';

    async buscarPorRiotID(nomeConta: string, tagLine: string): Promise<RiotAccount> {
        const nomeContaEncoded = encodeURIComponent(nomeConta);
        const tagLineEncoded = encodeURIComponent(tagLine);
        const response = await fetch(
            `${this.riotApiUrl}/riot/account/v1/accounts/by-riot-id/${nomeContaEncoded}/${tagLineEncoded}`,
            {
                headers: {
                    'X-Riot-Token': this.riotApiKey,
                },
            },
        )

        if (!response.ok) {
            throw new HttpException('Erro na API da Riot', response.status)
        }

        return response.json()
    }

    async buscarPartidasPorPuuid(puuid: string): Promise<string[]> {
        const response = await fetch(
            `${this.riotApiUrl}/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=20`,
            {
                headers: {
                    'X-Riot-Token': this.riotApiKey,
                },
            },
        )
        if (!response.ok) {
            throw new HttpException('Erro na API da Riot', response.status)
        }
        return response.json()
    }

    async buscarDetalhesPartida(matchId: string) {
        const response = await fetch(
            `${this.riotApiUrl}/tft/match/v1/matches/${matchId}`,
            {
                headers: {
                    'X-Riot-Token': this.riotApiKey,
                },
            },
        )
        if (!response.ok) {
            throw new HttpException('Erro na API da Riot', response.status)
        }
        return response.json()
    }
}
