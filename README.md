# Objetivo

O objetivo desse desafio é criar uma API com um endpoint para calcular o ângulo entre os ponteiros do relógio. O endpoint deve receber dois parâmetros, sendo o primeiro ***:hour*** e o segundo ***:minute*** e seja capaz de devolver o ângulo entre os dois ponteiros.


## Requisitos técnicos

 - [x] Compartilhar em um diretório sql o dump da base com registros já
       gerados pelo software;
 - [x] A interface de comunicação é REST;
 - [x] Conter documentação detalhada de como utilizar e rodar o projeto;
 - [x] O Content-Type de retorno deve ser JSON.
 - [x] O movimento dos ponteiros ocorrem de minuto em minuto; 
 - [x] Construir uma base Postgresql para armazenar as solicitações (id, hour, minute, angle, date);  
 - [x] O resultado não deverá ser recalculado caso a mesma consulta já tenha sido executada;  
 - [x] Deve ser retornado sempre o valor arredondado para o menor ângulo.


## Diferenciais

 - [x] Cobertura de testes unitários;
 - [ ] Entregar o projeto preparado para rodar em um ambiente containerizado.

## Rodando o projeto

Após clonar o projeto, execute os comandos abaixo:

```sh
> cd smallest-angle-v1 
> npm install 
> npm run dev
```
Após esses comandos, já é possível verificar e efetuar requisições através da rota (GET) http://localhost:3000/v1/rest/clock/:hour/:minute, porém os registros não são salvos no banco.

### Salvando no banco

Para salvar os registros no banco, execute as queries abaixo:

```sql
CREATE DATABASE db_name;

CREATE TABLE calculatedangles (
    id SERIAL PRIMARY KEY,
    hour INTEGER NOT NULL,
    minute INTEGER,
    angle INTEGER,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```
O nome da database pode ser qualquer um, mas o nome da tabela precisa ser **calculatedangles**.

Na raiz do projeto, crie um arquivo **.env** e adicione a variável de ambiente abaixo:

```sh
DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}
```

Após isso, faça novas requisições através da rota http://localhost:3000/v1/rest/clock/:hour/:minute e verifique se os dados foram salvos no banco.

### Rodando testes unitários

Para rodar os testes unitários após a inclusão do banco, basta rodar o comando:

```bash
> npm run test
```

## Exemplos de resultados

|Todas as requisições devem ser do tipo *GET* |REQUEST|RESULT|
|----------------|-------------------------------|-----------------------------|
|Passando hora e minuto |http://localhost:3000/v1/rest/clock/6/0 |`{"angle":180}`            |
|Passando somente hora|http://localhost:3000/v1/rest/clock/3 |`{"angle":90}`            |
|Trazendo o menor ângulo |http://localhost:3000/v1/rest/clock/9 |`{"angle":90}`            |



