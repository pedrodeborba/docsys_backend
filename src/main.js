import express from "express"
import dotenv from "dotenv"
dotenv.config()

import { DatabaseConfig } from "./database/DatabaseConfig.js"
import {router as patientRoutes} from "./routes/patientRoutes.js"
import {router as scheduleRoutes} from "./routes/scheduleRoutes.js"

DatabaseConfig.initialize()

const app = express()

app.use(express.json())
app.use(patientRoutes)
app.use(scheduleRoutes)

app.get("/", (req, res) => {
    res.status(200).send("<h1>API is running...</h1>")
})


app.listen(3002, () => console.log("Server is running at port 3002"))
