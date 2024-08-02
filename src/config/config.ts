import { config as conf } from "dotenv"
conf();
const _config = {
    port : process.env.PORT,
    databaseUrl : process.env.MONGO_CONNECTION_STRING,
}
// freeze is a method of javascript that make object readonly 
export const config = Object.freeze(_config)