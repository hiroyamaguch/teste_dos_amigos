<h1 align="center">Teste dos amigos</h1>

## Considerações
- Deixei o arquivo `.env` para facilitar a execução do teste;
- Deixei os comandos para rodar com `npm`, mas usei o `bun.sh` para desenvolver, por isso não tem um `package-lock.json`;

## Instalação

```bash
$ npm install
$ npm install prisma --save-dev
```

## Rodando o app

```bash
$ npx prisma generate
$ npm run start:dev
```

## Rodando os Testes

```bash
$ npm run test
```

## Visualizando os dados do banco

```bash
$ npx prisma studio
```

## License

Nest is [MIT licensed](LICENSE).
