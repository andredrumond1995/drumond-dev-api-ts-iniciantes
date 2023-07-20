import express from 'express';
import routes from './routes/index.routes';
import { errorHandlerMiddleware } from './middlewares/error.handler.middleware';
import bodyParser from 'body-parser';
import { responseHandlerMiddleware } from './middlewares/response.handler.middlware';
import { notFoundRouteMiddleware } from './middlewares/not.found.route.middleware';

const server = express();
const port = 3000;

server.use(responseHandlerMiddleware);
// Configurar o body-parser para tratar requisições de conteúdo JSON
server.use(bodyParser.json());
// Configurar o body-parser para tratar requisições de formulário (urlencoded)
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routes);
server.use(errorHandlerMiddleware);
server.use('*', notFoundRouteMiddleware);


if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default server;
