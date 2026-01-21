# RiotFetch Frontend

Interface web moderna e elegante para visualizar estatísticas do Teamfight Tactics com design glassmorphism.

## 🎨 Design

A interface utiliza um design moderno e sofisticado com:

- **Glassmorphism** - Efeitos de vidro fosco com backdrop-filter
- **Gradientes elegantes** - Paleta de cores em tons de azul e roxo
- **Animações suaves** - Transições fluidas com cubic-bezier
- **Layout responsivo** - Adaptável para desktop e mobile
- **Tipografia moderna** - Fonte Inter para melhor legibilidade

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com glassmorphism e gradientes
- **JavaScript ES6+** - Funcionalidades interativas
- **Fetch API** - Comunicação com o backend

## 📱 Responsividade

A interface é completamente responsiva e funciona perfeitamente em:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (até 767px)

## 🎯 Funcionalidades

### Busca de Jogador
- Campo para nome do invocador
- Campo para tag do jogador
- Validação de entrada
- Loading state durante a busca

### Exibição de Dados
- Informações básicas do jogador
- Lista de partidas recentes
- Colocação em cada partida
- Data e duração das partidas

### Estados da Interface
- Estado inicial
- Estado de carregamento
- Estado de sucesso
- Estado de erro

## 📁 Estrutura de Arquivos

```
frontend/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos CSS com glassmorphism
└── script.js           # Lógica JavaScript
```

## 🎨 Paleta de Cores

```css
/* Background Principal */
background: linear-gradient(135deg, #0a0a23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 100%);

/* Elementos de Vidro */
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);

/* Gradientes de Destaque */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores de Status */
--success: #10b981 (colocações top)
--error: #ef4444 (colocações bottom)
--text-primary: #e4e6ea
--text-secondary: #a0a3bd
```

## 🚀 Como Usar

1. **Abra o arquivo** `index.html` em um navegador
2. **Digite o nome** do invocador no primeiro campo
3. **Digite a tag** no segundo campo (ex: BR1, NA1)
4. **Clique em "Buscar"** para visualizar os dados

### Servidor Local (Opcional)

Para melhor experiência, execute um servidor local:

```bash
# Usando Python
python -m http.server 8080

# Usando Node.js
npx http-server -p 8080

# Usando PHP
php -S localhost:8080
```

## ⚙️ Configuração

### URL do Backend

A URL do backend está configurada no arquivo `script.js`:

```javascript
// Altere conforme necessário
const API_BASE_URL = 'http://localhost:3000';
```

### Endpoints Utilizados

```javascript
// Buscar conta
GET /conta?nomeConta=${nome}&tagLine=${tag}

// Buscar partidas
GET /conta/matches/${puuid}

// Detalhes da partida
GET /conta/match/${matchId}
```

## 🎭 Estados da Interface

### Loading State
```javascript
function showLoading(show) {
  // Exibe/oculta spinner de carregamento
  // Desabilita botão durante requisição
}
```

### Error State
```javascript
function showError(message) {
  // Exibe mensagem de erro elegante
  // Remove emojis para manter elegância
}
```

### Success State
```javascript
function displayPlayerInfo(data) {
  // Exibe informações do jogador
  // Mostra PUUID truncado
}
```

## 🎨 Componentes Visuais

### Glassmorphism Cards
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
}
```

### Buttons com Shimmer Effect
```css
.search-btn::before {
  /* Efeito de brilho que passa pelo botão */
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}
```

### Hover Animations
```css
.match-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.15);
}
```

## 📱 Breakpoints

```css
/* Tablet e abaixo */
@media (max-width: 768px) {
  .search-box { flex-direction: column; }
  .header h1 { font-size: 2.5rem; }
}

/* Mobile */
@media (max-width: 480px) {
  .container { padding: 16px; }
  .search-section { padding: 24px; }
}
```

## 🔧 Manutenção

### Adicionando Novas Funcionalidades

1. **HTML** - Adicione elementos na estrutura
2. **CSS** - Mantenha o padrão glassmorphism
3. **JavaScript** - Use async/await para requisições

### Padrões de Código

- Use classes CSS semânticas
- Mantenha a paleta de cores consistente
- Preserve os efeitos de glassmorphism
- Utilize transições suaves (300ms)

## 🎯 Performance

- **CSS Otimizado** - Uso eficiente de backdrop-filter
- **JavaScript Vanilla** - Sem dependências externas
- **Imagens Otimizadas** - Apenas CSS para elementos visuais
- **Minificação** - Considere minificar para produção

## 🔧 Debug

Para debugar problemas:

1. **Abra DevTools** (F12)
2. **Console** - Verifique erros JavaScript
3. **Network** - Analise requisições para API
4. **Elements** - Inspecione CSS e HTML

## 🌐 Compatibilidade

- **Chrome** 76+
- **Firefox** 72+
- **Safari** 13+
- **Edge** 79+

Suporte para `backdrop-filter` necessário para glassmorphism.