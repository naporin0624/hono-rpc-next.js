import { Hono } from "hono";
import { cors } from "hono/cors";
import * as test from "./test.route";

export const app = new Hono();
app.use("*", cors());

export const route = app.route("/test", test.route);
export type AppType = typeof route;
