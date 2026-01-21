# RiotFetch Backend

API RESTful construída com NestJS para consultar dados do Teamfight Tactics através da API oficial da Riot Games.

## 🛠️ Tecnologias

- **NestJS** - Framework Node.js para aplicações escaláveis
- **TypeScript** - Superset JavaScript com tipagem estática
- **Class Validator** - Validação de dados de entrada
- **Class Transformer** - Transformação de objetos

## 📋 Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- Chave da API da Riot Games

## 🔧 Instalação

```bash
npm install
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do backend:

```env
RIOT_API_KEY=sua_chave_da_api_riot_aqui
RIOT_API_URL=https://americas.api.riotgames.com
PORT=3000
```

## 🚀 Executando

```bash
# Desenvolvimento
npm run start:dev

# Debug
npm run start:debug

# Produção
npm run build
npm run start:prod
```

## 📖 Endpoints

### Buscar Conta por Riot ID
```http
GET /conta?nomeConta={nome}&tagLine={tag}
```

**Parâmetros:**
- `nomeConta` (string): Nome do invocador
- `tagLine` (string): Tag do jogador (ex: BR1)

**Resposta:**
```json
{
  "puuid": "string",
  "gameName": "string", 
  "tagLine": "string",
  "id": "string",
  "accountId": "string"
}
```

### Buscar Partidas por PUUID
```http
GET /conta/partidas/{puuid}
```

**Parâmetros:**
- `puuid` (string): PUUID do jogador

**Resposta:**
```json
["BR1_1234567890", "BR1_0987654321", ...]
```

### Buscar Detalhes da Partida
```http
GET /conta/match/{matchId}
GET /conta/match?matchId={matchId}
```

**Parâmetros:**
- `matchId` (string): ID da partida

**Resposta:**
```json
{
  "metadata": {
    "data_version": "string",
    "match_id": "string",
    "participants": ["puuid1", "puuid2", ...]
  },
  "info": {
    "game_datetime": "timestamp",
    "game_length": "number",
    "participants": [...]
  }
}
```

## 🏗️ Estrutura

```
src/
├── conta/
│   ├── conta.controller.ts  # Controlador das rotas
│   ├── conta.service.ts     # Lógica de negócio
│   └── dto/
│       └── buscar-conta.dto.ts  # Validação de entrada
├── app.module.ts            # Módulo principal
└── main.ts                  # Ponto de entrada
```

## 🔒 Validação

O backend utiliza `class-validator` para validação automática dos dados de entrada:

```typescript
export class BuscarContaDto {
  @IsString()
  nomeConta: string;

  @IsString() 
  tagLine: string;
}
```

## 🌐 CORS

O backend está configurado para aceitar requisições de qualquer origem durante o desenvolvimento:

```typescript
app.enableCors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📝 Scripts Disponíveis

- `build` - Compila o projeto
- `start` - Inicia em modo produção
- `start:dev` - Inicia em modo desenvolvimento com watch
- `start:debug` - Inicia em modo debug
- `lint` - Executa ESLint
- `format` - Formata código com Prettier

## 🔧 Lint e Formatação

```bash
# Lint
npm run lint

# Formatação
npm run format
```

## 🐛 Tratamento de Erros

A API utiliza o sistema de exceções do NestJS:

```typescript
if (!response.ok) {
  throw new HttpException('Erro na API da Riot', response.status);
}
```

## 📊 Monitoramento

Para produção, considere adicionar:
- Logs estruturados
- Métricas de performance
- Health checks
- Rate limiting
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
