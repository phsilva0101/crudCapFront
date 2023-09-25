# CrudCapFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Overview
Este projeto, desenvolvido em Angular com TypeScript, é a interface de usuário para um sistema imobiliário, proporcionando uma experiência amigável e intuitiva para gerenciar propriedades. Uma característica notável deste projeto é a integração com a API ViaCep, que permite obter informações detalhadas de endereços a partir do CEP inserido. O Proejto do front foi pensado para funcionar em um sistema com autenticação e roles que não serão desenvolvidas no momento. 

## Tecnologias Utilizadas

 * Angular
 * Typescript
 * Angular Material
 * Rxjs
 * ViaCep API
 * CSS

 ## Instalação e Configuração

 . Clone o Projeto
  ```
    git clone git@github.com:phsilva0101/crudCapFront.git
  ```
. Mude para o diretoria:
  ```
  cd crudCapFront
  ```
. Instale as Dependências:
  ```
   npm install
  ```

## Servidor De Desenvolvimento

Execute `ng serve` para o servidor dev. Navegue para `http://localhost:4200/`. A Aplicação irá recarregar automaticamente se você fizer qualquer mudança nos arquivos.

## Build

Execute `ng build` para construir o projeto.

## Como Usar:
 Com o projeto do front end devidamente rodando, juntamente com a api desse [repo](https://github.com/phsilva0101/CrudCap)
   * O usuário poderá navegar pelas funcionalidades do sistema através do menu lateral.
   * Na seção de cadastro de propriedades, ao inserir um CEP válido, o sistema automaticamente preenche os campos de endereço com as informações obtidas pela API ViaCep.




