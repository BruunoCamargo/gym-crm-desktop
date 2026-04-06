# 🚀 Gym CRM Desktop - Guia para Gerar EXE no Windows

## ⚠️ Importante

O `electron-builder` **não funciona no Linux** para compilar para Windows. Por isso, você precisa fazer o build no seu **Windows 10/11**.

---

## 📋 Pré-requisitos

Certifique-se de ter instalado:

1. **Node.js LTS** (https://nodejs.org/)
   - Versão mínima: 16.x
   - Recomendado: 18.x ou superior

2. **Git** (https://git-scm.com/)

3. **Visual Studio Build Tools** (opcional, mas recomendado)
   - Baixe em: https://visualstudio.microsoft.com/downloads/
   - Selecione "Desktop development with C++"

---

## 🎯 Passo a Passo

### **Passo 1: Clone o Repositório**

Abra o **PowerShell** ou **Command Prompt** e execute:

```bash
git clone https://github.com/BruunoCamargo/gym-crm-desktop.git
cd gym-crm-desktop
```

### **Passo 2: Instale as Dependências**

```bash
npm install
```

⏱️ **Tempo estimado:** 5-10 minutos

Se tiver erro, tente:
```bash
npm install --legacy-peer-deps
```

### **Passo 3: Gere o EXE**

```bash
npm run dist
```

⏱️ **Tempo estimado:** 10-15 minutos

### **Passo 4: Pronto! 🎉**

O EXE estará em:
```
C:\Users\[SeuUsuário]\gym-crm-desktop\dist\Gym-CRM-Setup-1.0.0.exe
```

---

## ✅ Verificação

Após o build, você deve ter:

```
dist/
├── Gym-CRM-Setup-1.0.0.exe  ← Instalador
├── Gym-CRM-1.0.0-portable.exe  ← Portável (sem instalação)
└── win-unpacked/  ← Arquivos descompactados
```

---

## 🔧 Solução de Problemas

### **Erro: "npm não é reconhecido"**
- Instale o Node.js: https://nodejs.org/
- Reinicie o PowerShell/CMD após a instalação

### **Erro: "git não é reconhecido"**
- Instale o Git: https://git-scm.com/
- Reinicie o PowerShell/CMD após a instalação

### **Erro: "Permission denied"**
- Execute o PowerShell como **Administrador**

### **Erro: "Cannot find module"**
- Delete a pasta `node_modules`:
  ```bash
  rmdir /s node_modules
  npm install
  ```

### **Build muito lento**
- Verifique a velocidade da internet
- Feche outros programas que usam muita memória RAM

---

## 📦 Distribuição

Após gerar o EXE, você pode:

1. **Compartilhar o instalador** (`Gym-CRM-Setup-1.0.0.exe`)
   - Usuários clicam 2x e instalam
   - Mais profissional

2. **Compartilhar o portável** (`Gym-CRM-1.0.0-portable.exe`)
   - Sem instalação
   - Funciona em qualquer lugar

---

## 🔒 Proteção de Propriedade Intelectual

Seu EXE inclui:
- ✅ Logo Graphics Vision
- ✅ Marca d'água anti-plágio
- ✅ Copyright © 2026 Graphics Vision
- ✅ Botão WhatsApp para suporte

---

## 📞 Suporte

Se tiver dúvidas, clique no botão WhatsApp dentro da aplicação!

---

**Gym CRM © 2026 — Todos os direitos reservados Graphics Vision** ✨
