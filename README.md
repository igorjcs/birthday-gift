# 🎂 Birthday Gift - Contagem Regressiva

Uma aplicação web moderna e interativa para contagem regressiva de aniversário, desenvolvida com React e Material-UI. Perfeita para criar uma surpresa digital especial!

## ✨ Funcionalidades

- **⏰ Contagem Regressiva em Tempo Real**: Exibe dias, horas, minutos e segundos até o grande dia
- **🎉 Animação de Confetti**: Celebração automática quando o contador chega a zero
- **🎥 Vídeo Surpresa**: Modal elegante com vídeo do YouTube para revelar a surpresa
- **📱 Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🎨 Interface Moderna**: Utiliza Material-UI para uma experiência visual profissional
- **⚡ Performance Otimizada**: Construído com Vite para carregamento rápido

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Material-UI (MUI)** - Componentes React com design moderno
- **React Confetti** - Efeitos de confetti para celebração
- **ESLint** - Linting para qualidade de código
- **PropTypes** - Validação de props dos componentes

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/igorjcs/birthday-gift.git
cd birthday-gift
```

2. Instale as dependências:
```bash
npm install --legacy-peer-deps
```

3. Configure a data do aniversário:
   - Abra o arquivo `src/App.jsx`
   - Altere a constante `TARGET_DATE` para a data desejada
   - Altere o `VIDEO_ID` para o ID do vídeo do YouTube desejado

## 🎮 Como Usar

### Desenvolvimento
```bash
npm run dev
```
Acesse http://localhost:5173 no navegador

### Build para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist`

### Preview do Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
birthday-gift/
├── public/
│   └── bg1.jpg              # Imagem de fundo
├── src/
│   ├── components/          # Componentes React
│   │   ├── Confetti.jsx    # Animação de confetti
│   │   ├── CountdownDisplay.jsx  # Display da contagem
│   │   ├── RevealButton.jsx     # Botão de revelação
│   │   └── VideoModal.jsx       # Modal do vídeo
│   ├── hooks/              # Custom hooks
│   │   └── useCountdown.js # Hook de contagem regressiva
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos da aplicação
│   ├── main.jsx            # Ponto de entrada
│   └── index.css           # Estilos globais
├── index.html              # Template HTML
├── package.json            # Dependências e scripts
└── vite.config.js          # Configuração do Vite
```

## 🎨 Personalização

### Alterar a Data do Aniversário
No arquivo `src/App.jsx`, modifique:
```javascript
const TARGET_DATE = "2025-03-25T00:00:00-03:00";
```

### Alterar o Vídeo
No arquivo `src/App.jsx`, modifique:
```javascript
const VIDEO_ID = "aXr9iGm7BHo";
```

### Alterar a Imagem de Fundo
Substitua o arquivo `public/bg1.jpg` pela sua imagem preferida.

### Personalizar Cores
As cores principais podem ser alteradas nos componentes em `src/components/`, procurando pelas cores hex (ex: `#f67280`).

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se livre para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal.

## 👤 Autor

**Igor JCS**
- GitHub: [@igorjcs](https://github.com/igorjcs)

---

⭐ Se você gostou deste projeto, não esqueça de dar uma estrela no GitHub!

🎉 Feito com ❤️ para tornar aniversários ainda mais especiais!
