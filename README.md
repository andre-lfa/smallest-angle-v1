# Objetivo

O objetivo desse desafio é criar uma API com um endpoint para calcular o ângulo entre os ponteiros do relógio. O endpoint deve receber dois parâmetros, sendo o primeiro ***:hour*** e o segundo ***:minute*** e seja capaz de devolver o ângulo entre os dois ponteiros.


## Requisitos técnicos

 - [ ] Compartilhar em um diretório sql o dump da base com registros já
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

## Exemplos de resultados

|                |REQUEST|RESULT|
|----------------|-------------------------------|-----------------------------|
|Passando hora e minuto |http://localhost:8080/v{n}/rest/clock/6/0 |`{"angle":180}`            |
|Passando somente hora|http://localhost:8080/v{n}/rest/clock/3 |`{"angle":90}`            |
|Trazendo o menor ângulo |http://localhost:8080/v{n}/rest/clock/9 |`{"angle":90}`            |




