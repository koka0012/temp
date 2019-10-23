# Monorepo Front

## Pré-requisitos

1. [Node.js](https://nodejs.org/en/) >= 10
2. [Yarn](https://yarnpkg.com/lang/en/)

## Instalando

```
$ git clone git@code.rhsoftware.dev:cloud/front.git
$ yarn setup // TODO
```

Pode demorar alguns bons minutos, aproveite esse tempo para tomar um café.

## Comandos disponíveis

| Comando               | Descrição                                           |
| --------------------- | --------------------------------------------------- |
| `yarn setup`          | Configura o ambiente para começar o desenvolvimento |
| **Mobile**            |
| `yarn mobile:pod`     | Instala os pods no iOS.                             |
| `yarn mobile:android` | Roda a aplicação no Android.                        |
| `yarn mobile:ios`     | Roda a aplicação no iOS.                            |
| `yarn mobile:clear`   | Roda o package limpando todo o cache.               |
