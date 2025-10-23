/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';                 

// Em produção SEMPRE dev: false
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
    
      handle(req, res);
    });

    server.listen(port, hostname, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1); 
  });

// (opcional) manter o processo limpo
process.on('unhandledRejection', (e) => { console.error(e); });
process.on('uncaughtException', (e) => { console.error(e); });
