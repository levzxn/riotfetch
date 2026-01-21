# RiotFetch - TFT Stats (by [@levzxn](github.com/levzxn))

Uma aplicação web moderna para consultar estatísticas do Teamfight Tactics (TFT) utilizando a API oficial da Riot Games.

## 🚀 Sobre o Projeto

O RiotFetch é uma ferramenta elegante que permite aos jogadores de TFT consultarem suas estatísticas de partidas recentes, incluindo colocações, composições utilizadas e outros dados relevantes. A aplicação oferece uma interface moderna e responsiva com design glassmorphism.

## 🛠️ Tecnologias

### Backend

- **NestJS** - Framework Node.js para aplicações escaláveis
- **TypeScript** - Superset JavaScript com tipagem estática
- **Riot Games API** - API oficial para dados do TFT

### Frontend

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização moderna com glassmorphism
- **JavaScript** - Funcionalidades interativas
- **Fetch API** - Comunicação com backend

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Chave da API da Riot Games ([obter aqui](https://developer.riotgames.com/))

## 🔧 Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd riotfetch
```

### 2. Configurar o Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta backend:

```env
RIOT_API_KEY=sua_chave_da_api_riot
RIOT_API_URL=https://americas.api.riotgames.com
PORT=3000
```

### 3. Instalar dependências do Frontend

O frontend utiliza apenas HTML, CSS e JavaScript vanilla, não necessitando instalações adicionais.

## 🚀 Executando o projeto

### Backend

```bash
cd backend

# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

O servidor estará disponível em `http://localhost:3000`

### Frontend

Abra o arquivo `frontend/index.html` em um navegador ou utilize um servidor local:

```bash
cd frontend

# Usando Python
python -m http.server 8080

# Usando Node.js (http-server)
npx http-server -p 8080
```

O frontend estará disponível em `http://localhost:8080`

## 📖 Como Usar

1. **Inicie o backend** seguindo as instruções acima
2. **Abra o frontend** em seu navegador
3. **Digite o nome de invocador** e a **tag** (ex: NomeDoJogador#BR1)
4. **Clique em "Buscar"** para visualizar as estatísticas

## 🔗 Endpoints da API

### Buscar Conta

```
GET /conta?nomeConta={nome}&tagLine={tag}
```

### Buscar Partidas

```
GET /conta/partidas/{puuid}
```

### Buscar Detalhes da Partida

```
GET /conta/match/{matchId}
GET /conta/match?matchId={matchId}
```

## 📁 Estrutura do Projeto

```
riotfetch/
├── backend/
│   ├── src/
│   │   ├── conta/
│   │   │   ├── conta.controller.ts
│   │   │   ├── conta.service.ts
│   │   │   └── dto/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autor

- **Desenvolvedor Principal** - Levi Medeiros [github.com/levzxn]()

⭐ Se este projeto te ajudou, considere dar uma estrela!
