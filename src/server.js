import dotenv from "dotenv";
import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "./tailwind.css";

dotenv.config();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = express() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    bodyParser.json(),
    cookieParser(),
    sirv("static", { dev }),
    sapper.middleware({
      session: (req, res) => {
        let data = {
          user: {},
					menu: [],
					token: null
        };
        if (req.cookies.token) {
					const { user, menu, token } = req.cookies;
					data = {
						...data,
						user: JSON.parse(user),
						menu: JSON.parse(menu),
						token
					};
        }
        return data;
      }
    })
  );

export default app;

if (!process.env.NOW_REGION) {
  app.listen(PORT, err => {
    if (err) console.log("error", err);
  });
}
