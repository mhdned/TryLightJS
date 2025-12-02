import { antiSSRF } from "@kavehlightjs/middlewares";
import * as express from "express";

const app = express.Router();
app.use(antiSSRF("localhost", "127.0.0.1"));
