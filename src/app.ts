import express from "express"
import config from "config"

const app = express()

//Json middleware
app.use(express.json())

// DB
import db from "../config/db"

// routers
import router from "./router"

app.use("/api/", router);

//app port 
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    console.log(`Aplicação esta funcionando na porta : ${port}`);
});

