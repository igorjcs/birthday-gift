# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Birthday Gift! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Como Contribuir

### Reportando Bugs

Se você encontrar um bug, por favor abra uma issue incluindo:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. comportamento atual
- Screenshots (se aplicável)
- Versão do navegador e sistema operacional

### Sugerindo Melhorias

Sugestões são sempre bem-vindas! Para sugerir uma melhoria:
1. Verifique se já não existe uma issue similar
2. Abra uma nova issue com tag "enhancement"
3. Descreva claramente a melhoria proposta e sua motivação

### Pull Requests

1. **Fork o Projeto**
   ```bash
   git clone https://github.com/seu-usuario/birthday-gift.git
   ```

2. **Crie uma Branch**
   ```bash
   git checkout -b feature/MinhaNovaFuncionalidade
   ```

3. **Faça suas Alterações**
   - Siga o estilo de código existente
   - Adicione comentários quando necessário
   - Teste suas alterações localmente

4. **Commit suas Mudanças**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

   Convenção de commits:
   - `feat:` - Nova funcionalidade
   - `fix:` - Correção de bug
   - `docs:` - Alterações na documentação
   - `style:` - Formatação, ponto e vírgula, etc
   - `refactor:` - Refatoração de código
   - `test:` - Adição de testes
   - `chore:` - Atualização de build, dependências, etc

5. **Push para o Branch**
   ```bash
   git push origin feature/MinhaNovaFuncionalidade
   ```

6. **Abra um Pull Request**
   - Descreva suas mudanças claramente
   - Referencie issues relacionadas
   - Aguarde revisão

## 🎨 Padrões de Código

### JavaScript/React
- Use componentes funcionais
- Utilize hooks do React
- Adicione PropTypes para validação
- Escreva comentários JSDoc para funções principais

### CSS/Styling
- Use Material-UI (MUI) para componentes
- Mantenha consistência com o tema existente
- Prefira sx props do MUI quando possível

### Estrutura de Arquivos
```
src/
├── components/     # Componentes reutilizáveis
├── hooks/         # Custom hooks
├── App.jsx        # Componente principal
└── main.jsx       # Ponto de entrada
```

## ✅ Checklist antes do PR

- [ ] O código passa no linting (`npm run lint`)
- [ ] O build funciona sem erros (`npm run build`)
- [ ] Testei as alterações localmente
- [ ] Atualizei a documentação (se necessário)
- [ ] Segui os padrões de código do projeto
- [ ] Meus commits seguem a convenção estabelecida

## 🧪 Testando Localmente

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Rodar em modo desenvolvimento
npm run dev

# Verificar linting
npm run lint

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📝 Dúvidas?

Se tiver qualquer dúvida sobre como contribuir:
- Abra uma issue com a tag "question"
- Entre em contato com os mantenedores

## 🙏 Agradecimentos

Toda contribuição é valiosa e apreciada! Obrigado por ajudar a tornar este projeto melhor.
