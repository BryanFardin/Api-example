# API

Uma API desenvolvida para Portifolio.
Cria um objeto concessionaria com nome, id, carros e atributo dos carros disponiveis e salva em um banco de dados.

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

- `GET /api`: Retorna uma lista de concessionarias.
- `GET /api/:id`: Retorna uma unica concessionaria.
- `POST /api`: Adiciona uma nova concessionaria.
- `PUT /api/:id`: Atualiza uma concessionaria.
- `DELETE /api/:id`: Adiciona uma concessionaria.
## Exemplos de Requisições

Aqui estão alguns exemplos de como fazer requisições à API:

- Obter todas concessionarias:

    ```bash
    curl -X GET http://localhost:3000/api
    ```

- Adicionar uma nova concessionaria:

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{
	"id":121,
	"nome":"CentroCar",
	"modelo":{"Fiat":"Uno"},
	"atributos":{"Cor":"Branco","Portas":2}
}' http://localhost:3000/api
    ```

## Configuração

A API utiliza variáveis de ambiente para configuração:

```dotenv
PORT=3000
DB_PASSWORD=mongodb:SUA_URL_DO_BANCO
