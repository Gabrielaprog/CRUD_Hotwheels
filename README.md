## CRUD - HOTWHEELS - PROJETO - FASE 2

## Nome: Gabriela Silveira Trindade Rodrigues

# Para executar este projeto:

1. Entre pasta crud_hotwheels_projeto_fase1 pelo terminal:

```bash
cd crud_hotwheels_projeto_fase1
```

2. Execute npm install

```bash
npm install
```

3. Execute npm start

```bash
npm start
```

# Para executar a API:

1. Entre em ./DesenvolvimentoFrontend/hotwheels-api/

```bash
cd DesenvolvimentoFrontend/hotwheels-api
```

2. Execute npm install

```bash
npm install
```

3. Execute npm start

```bash
npm start
```

# Explicação de cada componente:

## Pasta api:

**Arquivos contidos/subpastas:**

-   api.js: Responsável por armazenar a base url que da acesso a api

## Pasta components:

**Arquivos contidos/subpastas:**

**subpasta alerts:**

-   index.js: responsável por renderizar uma mensagem avisando que um carro foi registrado.

**subpasta NavBar:**

-   NavBar.js: responsável por todas as rotas de navegação;
-   NavBar.css: responsável por toda a estilização do componente;
-   NavBar.cy.jsx: responsável pelo teste de integração.

# Pasta helpers:

-   mock > mockCar.js: Contêm dicionário para teste simulando retorno do banco de dados;
-   car.js: Contêm dicionário para impressão de dados na tabela utilizando a memória da aplicação.

# Pasta hook:

-   useCars: hook para camada de controle. Contêm a chamada dos respectivos métodos de serviços, que fazem as requisições http à API.

# Pasta page:

**Arquivos contidos/subpastas:**

**subpasta CarForm:**

-   Carform.cy.jsx: responsável pelo teste de integração;
-   CarForm.jsx: apresenta formulário, para adição, exclusão e edição dos carros;
    imagem de fundo do componente;
-   styles.css: responsável pela estilização de cada componente.

**subpasta CarList:**

**pasta components:**

Contém todos os componentes de modais de exclusão e edição de carros juntamente com seus testes.

-   Car.cy.jsx: Responsável pelo teste de integração;
-   CarList.css: Responsável pela estilização do componente;
-   CarList.jsx: Responsável por renderizar a tabela contendo todos os carros registrados.

**subpasta Home:**

-   Imagem de fundo do componente;
-   Home.css: responsável pela estilização do componente;
-   Home.cy.js: responsável pelo teste de integração;
-   Home.js: responsável por renderizar a página inicial

**subpasta Sobre:**

-   Imagem de fundo do componente;
-   Sobre.css: responsável pela estilização do componente;
-   Sobre.cy.js: responsável pelo teste de integração;
-   Sobre.js: responsável por renderizar a página informativa.

# Pasta services

-   car.js: Contêm os métodos que executam as requisições http à API, retornando para useCars, utilizando nesse contexto como controller.

# Arquivo env_example

-   REACT_APP_BASE_URL: dominio + porta de escuta da API. (REACT_APP_BASE_URL=http://localhost:5000)


# Imagens de cada página: (projeto final)

- página home:

![](public\Captura de tela 2024-09-23 185547.png)

- página sobre:

![](public\Captura de tela 2024-09-23 185606.png)



- página Carros:

![](public\Captura de tela 2024-09-23 185730.png)

- página Formulário:

![](public\Captura de tela 2024-09-23 185748.png)
