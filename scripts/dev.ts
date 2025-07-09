import { exec } from "child_process";
import open from "open";

const port = 3000;
const url = `http://localhost:${port}`;

const server = exec("pnpm next dev");

setTimeout(() => {
  open(url);
}, 1000);

server?.stdout?.pipe(process.stdout);
server?.stderr?.pipe(process.stderr);
