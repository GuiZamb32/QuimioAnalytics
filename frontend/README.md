# QuimioAnalytics Frontend

Interface web moderna para visualização e análise de dados químicos integrados do QuimioAnalytics.

## 🎨 Design System

### Paleta de Cores

#### Verde - Accent & Success
- `#04BDA2` - Verde-Accent (Primary accent)
- `#098c78` - Verde-Medium
- `#04BDA2` - Verde-Deep

#### Azul - Primary Actions & Buttons
- `#034C94` - Azul-Dark
- `#016FE1` - Azul-Primary (Main CTA)
- `#157eef` - Azul-Light

#### Vermelho - Alert & High Price
- `#520a0a` - Vermelho-Deep
- `#8c0909` - Vermelho-Medium
- `#bd0404` - Vermelho-Alert

#### Backgrounds & Surfaces
- `#0d0d0d` - Preto-Deep (Background)
- `#111111` - Preto-Pure (Cards)
- `#191919` - Preto-Elevated (Elevated cards)
- `#424242` - Cinza-Dark (Borders)
- `#737373` - Cinza-Muted (Secondary text)
- `#eaeaea` - Branco-Text (Primary text)

## 🚀 Tecnologias

- **React 18.3** - Biblioteca UI
- **Vite 5.1** - Build tool e dev server
- **Tailwind CSS 3.4** - Estilização
- **React Router 6** - Roteamento
- **Recharts 2.12** - Visualização de dados
- **Lucide React** - Ícones

## 📁 Estrutura de Pastas

```
frontend/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   └── Navbar.jsx     # Navegação principal
│   ├── pages/             # Páginas da aplicação
│   │   ├── Dashboard.jsx  # Dashboard com gráficos
│   │   ├── Top5Ranking.jsx # Ranking probabilístico
│   │   ├── Upload.jsx     # Upload de planilhas
│   │   └── ChemicalRef.jsx # Referências químicas
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Funções auxiliares
│   ├── App.jsx            # Componente raiz
│   ├── main.jsx           # Entry point
│   └── index.css          # Estilos globais
├── public/                # Assets estáticos
├── index.html             # HTML principal
├── package.json           # Dependências
├── tailwind.config.js     # Configuração Tailwind
├── vite.config.js         # Configuração Vite
└── postcss.config.js      # Configuração PostCSS
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. Navegue até a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para testar a build de produção localmente:

```bash
npm run preview
```

## 🎯 Funcionalidades

### 1. Dashboard
- Estatísticas em tempo real
- Gráfico de abundância por amostra
- Distribuição de compostos por fonte externa
- Histórico de batches processados

### 2. Top 5 Ranking
- Visualização dos 5 principais candidatos por feature
- Ranking probabilístico com métricas analíticas
- Busca por Feature ID ou nome de composto
- Exportação em formato Parquet

### 3. Upload de Planilhas
- Interface drag-and-drop para planilhas
- Suporte para arquivos .xlsx e .csv
- Validação de arquivos
- Histórico de uploads
- Integração com pipeline ETL

### 4. Referências Químicas
- Catálogo de compostos de PubChem, ChEBI e ChemSpider
- Busca por nome, fórmula ou InChIKey
- Links diretos para bases externas
- Informações detalhadas (fórmula, peso molecular, classes)

## 🔌 Integração com Backend

O frontend está configurado para se comunicar com o backend através de um proxy Vite:

```javascript
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }
  }
}
```

### Endpoints esperados (exemplo):

```
GET  /api/stats           # Estatísticas do dashboard
GET  /api/features        # Lista de features
GET  /api/ranking/top5    # Top 5 candidatos
POST /api/upload          # Upload de planilhas
GET  /api/compounds       # Compostos de referência
```

## 🎨 Componentes Customizados

### Classes CSS Utilitárias

```css
.btn-primary     # Botão azul primário
.btn-secondary   # Botão verde secundário
.btn-danger      # Botão vermelho de alerta
.card            # Container com background e borda
.input-field     # Campo de input estilizado
.table-header    # Cabeçalho de tabela
.table-row       # Linha de tabela com hover
```

## 📊 Visualização de Dados

Os gráficos usam **Recharts** com tema customizado:

```javascript
<Tooltip 
  contentStyle={{ 
    backgroundColor: '#111111', 
    border: '1px solid #424242',
    borderRadius: '8px'
  }}
/>
```

## 🧪 Desenvolvimento

### Estrutura de Componentes

Todos os componentes seguem o padrão funcional com hooks:

```jsx
import { useState, useEffect } from 'react'

function ComponentName() {
  const [state, setState] = useState(initialValue)
  
  useEffect(() => {
    // Side effects
  }, [dependencies])
  
  return (
    <div className="card">
      {/* JSX */}
    </div>
  )
}

export default ComponentName
```

### Boas Práticas

- Use classes Tailwind para estilização
- Mantenha componentes pequenos e focados
- Extraia lógica complexa para hooks customizados
- Use as cores da paleta definidas no tailwind.config.js
- Siga a estrutura de pastas estabelecida

## 🔄 Próximos Passos

- [ ] Integração real com API backend
- [ ] Autenticação de usuários
- [ ] Paginação nas tabelas
- [ ] Filtros avançados
- [ ] Exportação de dados em múltiplos formatos
- [ ] Modo claro/escuro
- [ ] Testes unitários com Vitest
- [ ] Testes E2E com Playwright

## 👥 Equipe

| Membro | Frente principal |
|--------|------------------|
| Guilherme da Silva Anselmo | Modelagem PostgreSQL e DER |
| Guilherme Zamboni Menegacio | ETL com Pandas |
| Vinícius Joacir dos Anjos | Integração com bases públicas |
| Samuel Silva de Rezende | Documentação e arquitetura |

## 📄 Licença

Uso acadêmico interno — SENAI Florianópolis — 2026.