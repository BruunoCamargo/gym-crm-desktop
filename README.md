# Gym CRM Desktop

Aplicação desktop para Windows 10/11 desenvolvida com Electron e React. Sistema profissional de gestão para academias com sincronização em nuvem, auto-update e proteção de dados.

## 🚀 Características

- **Desktop Nativo**: Aplicação Windows (EXE) com interface moderna
- **Sincronização em Nuvem**: Dados sincronizados com Vercel em tempo real
- **Auto-Update**: Atualizações automáticas via GitHub
- **Offline First**: Funciona offline com sincronização automática
- **Segurança**: Autenticação segura e proteção de dados
- **Logo Graphics Vision**: Marca d'água anti-plágio
- **Suporte via WhatsApp**: Botão flutuante de contato

## 📋 Requisitos

- Windows 10 ou superior
- Node.js 16+ (para desenvolvimento)
- npm ou pnpm

## 🛠️ Desenvolvimento

### Instalação

```bash
cd gym-crm-desktop
npm install
# ou
pnpm install
```

### Executar em Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

Isso iniciará o servidor React na porta 3000 e a janela Electron.

### Build para Produção

```bash
npm run build
# ou
pnpm build
```

### Gerar Executável EXE

```bash
npm run dist
# ou
pnpm dist
```

O executável será gerado em `dist/Gym-CRM-1.0.0.exe`

### Gerar Versão Portável

```bash
npm run dist:portable
# ou
pnpm dist:portable
```

## 📦 Estrutura do Projeto

```
gym-crm-desktop/
├── public/
│   ├── electron.js          # Processo principal do Electron
│   ├── preload.js           # Script de preload (segurança)
│   ├── index.html           # Template HTML
│   └── assets/              # Ícones e recursos
├── src/
│   ├── App.tsx              # Componente principal
│   ├── App.css              # Estilos
│   ├── index.tsx            # Entrada React
│   ├── index.css            # Estilos globais
│   └── electron.d.ts        # Tipos TypeScript
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
└── README.md               # Este arquivo
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_URL=https://seu-vercel-app.vercel.app
REACT_APP_GITHUB_REPO=BruunoCamargo/gym-crm-desktop
```

## 🚀 Deploy

### GitHub Releases

1. Faça commit e push das mudanças
2. Crie uma release no GitHub
3. O executável será gerado automaticamente

### Distribuição Manual

1. Gere o executável: `npm run dist`
2. Encontre o arquivo `.exe` em `dist/`
3. Distribua para seus usuários

## 🔄 Auto-Update

A aplicação verifica automaticamente por atualizações ao iniciar. Se uma atualização estiver disponível, o usuário será notificado e poderá instalar.

## 📝 Licença

MIT © Graphics Vision 2026

## 👨‍💻 Desenvolvido por

**Graphics Vision**  
Especializada em desenvolvimento de aplicações web e desktop

---

**Gym CRM © 2026 — Todos os direitos reservados Graphics Vision**
