const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./propiedades.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = server.listen(3000).handler;

module.exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    handler(event, context, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
};
