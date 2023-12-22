# API

Uma API desenvolvida para Portifolio.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Exemplos de Requisições](#exemplos-de-requisições)
- [Configuração](#configuração)

## Instalação

Para instalar e executar esta API localmente, siga estes passos:

1. Clone o repositório:

    ```bash
    git clone https://github.com/BryanFardin/Api-example.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd Api-example
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor:

    ```bash
    npm start
    ```

A API estará acessível em `http://localhost:3000`.

## Uso

Esta API fornece endpoints simples para realizar operações. Certifique-se de entender a documentação dos endpoints antes de fazer requisições.

## Endpoints

- `GET /api`: Retorna uma lista de requests.
- `POST /api`: Adiciona um novo request.

## Exemplos de Requisições

Aqui estão alguns exemplos de como fazer requisições à API:

- Obter Requests:

    ```bash
    curl -X GET http://localhost:3000/api
    ```

- Adicionar um novo Request:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '[{"setorId":1,"conjuntoId":0,"checkboxesState":{"7001A":true,"7001B":false},"atributos":{"7001A":{"Pressao":"43","Temperatura":"34","Cheiro":"4"},"7001B":{}}}]' http://localhost:3000/api
    ```

## Configuração

A API utiliza variáveis de ambiente para configuração:

```dotenv
PORT=3000
DB_PASSWORD=mongodb:SUA_URL_DO_BANCO
