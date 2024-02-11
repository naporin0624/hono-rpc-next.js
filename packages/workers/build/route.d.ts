import * as hono_hono_base from 'hono/hono-base';
import * as hono_types from 'hono/types';
import * as hono from 'hono';
import { Hono } from 'hono';

declare const app: Hono<hono.Env, hono_types.BlankSchema, "/">;
declare const route: hono_hono_base.HonoBase<hono.Env, hono_types.MergeSchemaPath<hono.ToSchema<"get", "/", unknown, {
    message: string;
}>, "/test">, "/">;
type AppType = typeof route;

export { type AppType, app, route };
