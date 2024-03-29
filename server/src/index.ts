import "./pre-start";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Envs from "./constants/Envs";
;
import Paths from "./constants/Paths";
import connectDB from "./lib/db";
import userRouter from "./routes/user.Routes";
const app = express();
app.use(
    cors({
        origin: Envs.Client,
        methods: "GET,PUT,POST,DELETE",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//connect database
connectDB();

// Routing
app.use(Paths.Base, userRouter);

//server
app.listen(Envs.Port, () =>
    console.log(`Example app listening on port ${Envs.Port}!`)
);

