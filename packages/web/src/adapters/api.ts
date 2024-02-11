import { hc } from "hono/client";
import type { AppType } from "api/build/route";

export const api = hc<AppType>("http://localhost:8787");
