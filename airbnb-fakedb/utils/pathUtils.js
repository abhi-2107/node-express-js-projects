import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // current dir
const rootDir = path.dirname(__dirname); // one level up

export { rootDir };
