# The News - Tech Case (Frontend)

Este repositório contém a implementação do frontend para o teste técnico da plataforma The News.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework utilitário para estilização.
- **Axios**: Cliente HTTP para comunicação com a API.
- **React Router** - Para navegação entre páginas.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Para acessar a plataforma, é necessário que o backend do projeto esteja em funcionamento.


## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/MiltonVini/waffle-tech-case-frontend.git

2. Acesse a pasta do projeto:
   ```bash
    cd waffle-tech-case-frontend

3. Instale as dependências:
   ```bash
    npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
    npm run dev

5. Acesse no navegador:
    ```bash
    http://localhost:5173/admin
    http://localhost:5173/streak

*O projeto estará disponível em http://localhost:5173/ (ou a porta configurada pelo Vite).*

Observação: Para acessar a página /streak, é necessário estar autenticado. Você pode acessar com um link de autologin fornecido pelo backend para a autenticação automática.
    
## Tecnologias Utilizadas
- 📊 Dashboard com métricas de leitura e engajamento dos usuários.
- 📜 Histórico de leituras para acompanhamento do streak do usuário.
- 🏆 Sistema de conquistas para incentivar a leitura.

## Estrutura do Projeto

O projeto segue a seguinte estrutura de pastas:


### Explicação

- **/src**: Diretório principal contendo todo o código-fonte da aplicação.
  - **/context**: Contém os contextos para gerenciar o estado da aplicação, como admin, autenticação e usuário.
    - **adminContext.tsx**
    - **authContext.tsx**
    - **userContext.tsx**
  - **/hooks**: Contém os hooks personalizados para manipulação de dados e interações.
    - **adminHooks.tsx**
    - **authHooks.tsx**
    - **userHooks.tsx**
  - **/lib**: Bibliotecas de apoio.
  - **/pages**: Contém as páginas principais, como painel de administração e painel de streak do usuário e seus componentes
    - **/adminPanel**
    - **userStreakPanel**
  - **/provider**: Contém os provedores para gerenciar o estado global da aplicação.
    - **adminProvider.tsx**:
    - **authProvider.tsx**: 
    - **userProvider.tsx**
  - **AdminPanel.tsx**: Componente principal do painel de administração
  - **App.tsx**: Componente principal do painel de streak do usuário
  - **main.tsx**: Ponto de entrada para a renderização da aplicação.
  - **Routes.tsx**: Gerencia as rotas da aplicação com o React Router.
  


## Autor
Desenvolvido por Milton Vinicius. Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato!