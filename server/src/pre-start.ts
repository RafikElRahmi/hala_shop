import { config } from "dotenv";
import path from "path";

const env = "development";

const result = config({
    path: path.join(__dirname, `../env/${env}.env`),
});
if (result.error) throw result.error;

