const http = require("http");
const routes = require("./routes");

const start = console.time();

const server = http.createServer(routes.requestHandler);

server.listen(3000);

const stop = console.timeEnd();

console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);
