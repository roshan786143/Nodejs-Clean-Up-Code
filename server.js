const http = require("http");
const fs = require("fs");
const port = 8040;
const routes = require('./routes');
const server = http.createServer(routes.handler).listen(port);
