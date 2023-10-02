import {dirname} from "path";
import { fileURLToPath } from 'url';

let rootDir = dirname(fileURLToPath(import.meta.url));

export default  rootDir.replace("\\modules","")