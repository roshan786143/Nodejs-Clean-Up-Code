const http = require("http");
const port = 3008;
const routes = require('./routes');
const server = http.createServer(routes.handler).listen(port);
