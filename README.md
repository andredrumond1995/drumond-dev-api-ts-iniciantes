# Typescript API para iniciantes

Eae pessoal, tudo na paz? Espero que sim. Este é o projeto que utilizamos em nossa [playlist no youtube](https://www.youtube.com/watch?v=d_BtuZKu8Ew&list=PLnX-BX_qpDLYCm-M8GnHvJKpG1q5bNlr0) utilizando Typescript + Node.js para iniciantes

## Alguns pacotes utilizados no projeto
1 - nvm 0.39.1\
2 - node v16.15.1\
3 - npx 8.11.0

## Como rodar o projeto

1 - Faça o clone do repositório (recomendo utilizar o bash ou zsh)

```bash
git clone https://github.com/andredrumond1995/drumond-dev-api-ts-iniciantes.git
```

2 - Acesse o diretório criado

```
cd drumond-dev-api-ts-iniciantes
```

3 - Se nao tiver o npx instalado, vc pode optar por instala-lo

```
sudo npm i -G npx (globalmente)
```
ou
```
npm i npx --save-dev (devDependencies no package.json)
```

4 - Instale os pacotes definidos em nosso package.json
```
npm install
```

5 - Rode as migrations e as seeds
```
npm run setup:db
```

6 - Rode o projeto\
No modo de desenvolvimento (esse é recomendável enquanto estamos desenvolvendo nosso serviço)

```
npm run dev
```

ou No produtivo

```
npm start
```

Verifique se retornou uma mensagem assim:

```
Server running on port 3000
```

7 - Faça um teste enviando uma requisição para o serviço

```
curl --request GET \
  --url http://localhost:3000/users
```
Verifique se retorna algo como
```
{"httpCode":200,"routePath":"/users","timestamp":"2023-07-20T13:57:13.053Z","data":[{"id":1,"name":"test1","email":"test1@test1"},{"id":2,"name":"test2","email":"test2@test2"},{"id":3,"name":"test3","email":"test3@test3"}]}
```

## License

[MIT](LICENSE)