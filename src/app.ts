import express from "express"
import config from "config"

const app = express()

//Json middleware

app.use(express.json())

//app port 
const port = config.get<number>("port");

app.listen(port, async () => {
    console.log("Aplicação esta funcionando na porta : ${port");
});

