import { createServer } from "node:http";
import { handleServerRequest } from "./form.mjs";

const hostname = "127.0.0.1";
const port = "3000";

const server = createServer(handleServerRequest);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
