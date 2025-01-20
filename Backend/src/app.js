import express, { application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
    })
)
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //To store the images and favicon
app.use(cookieParser());

//router create
import userRouter from "./routes/user.routes.js";
import itemRouter from "./routes/item.routes.js";

app.use('/api/v1/users',userRouter);
app.use('/api/v1/items',itemRouter);
// app.use('/api/v1/product',productRouter);




export {app};

