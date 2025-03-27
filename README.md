# Portfólio Interativo com Preview em Tempo Real

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Bem-vindo ao meu portfólio interativo! Este é um projeto inovador que permite visualizar e interagir com diferentes aplicações web diretamente no README. Utilizando tecnologias modernas como JavaScript e iframes, cada projeto pode ser testado em tempo real sem sair da página.

### 🚀 Características Principais

- **Preview Interativo**: Teste os projetos diretamente na página
- **Interface Intuitiva**: Navegação simples entre diferentes projetos
- **Responsivo**: Adaptável a diferentes tamanhos de tela

## Projetos

Aqui estão alguns dos projetos que você pode visualizar:

- [Jogo do Dino](<javascript:void(0);>)
- [Calculadora](<javascript:void(0);>)
- [Lista de Tarefas](<javascript:void(0);>)

## Demonstração

![Demo do Projeto](./assets/demo.png)

_Demonstração interativa do README em ação_

## Funcionalidades

- 🖼️ Janela de preview fixa no topo
- 📜 Área de documentação rolável
- 📱 Design responsivo
- 🔄 Carregamento dinâmico do README

## Como Usar

1. Clone este repositório
2. Faça o deploy do seu projeto em uma plataforma de hospedagem (ex: GitHub Pages, Vercel, Netlify)
3. Configure a URL do seu projeto no arquivo `script.js` (se necessário).

## Deploy no GitHub Pages

Siga estes passos para fazer o deploy do seu projeto no GitHub Pages:

1. **Crie um repositório no GitHub**

   - Acesse [GitHub](https://github.com) e crie um novo repositório
   - Inicialize com um README se desejar

2. **Configure seu projeto local**

   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages**

   - Vá para Settings > Pages no seu repositório
   - Em "Source", selecione "main" como branch
   - Escolha a pasta root (/) como source
   - Clique em Save

4. **Acesse seu site**

   - Aguarde alguns minutos para o deploy
   - Seu site estará disponível em: `https://seu-usuario.github.io/seu-repositorio`

5. **Atualizando o site**
   ```bash
   git add .
   git commit -m "Atualizações"
   git push
   ```

## Outras Plataformas de Deploy

- **Vercel/Netlify**: Ótimo para aplicações React, Vue, ou Next.js
- **Heroku**: Para aplicações com backend
- **Firebase Hosting**: Bom para projetos Firebase

## Requisitos do Sistema

- Node.js 14.x ou superior
- Navegador moderno com suporte a iframes
- Conexão com internet para preview de projetos

## Personalização

Você pode personalizar a aparência editando os estilos CSS no arquivo `index.html`.

### Exemplos de Uso

1. **Preview de Aplicação React:**

   - Configure a URL do seu projeto React deployado
   - Ajuste a altura da janela de preview conforme necessário

2. **Documentação de API:**

   - Use para mostrar endpoints em tempo real
   - Combine com Swagger UI para melhor visualização

3. **Portfólio Interativo:**
   - Showcase de múltiplos projetos
   - Navegação dinâmica entre demonstrações

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commitar suas mudanças
4. Enviar um pull request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
