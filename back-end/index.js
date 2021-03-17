const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Router = require('koa-router');
const mysql = require('mysql2/promise');
require('dotenv').config();

const port = parseInt(process.env.PORT || '3001');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.status = 200;
    ctx.body = "hello";
});

app
    .use(cors())
    .use(bodyParser())
    // .use(async (ctx, next) => {
    //     const connection = await mysql.createConnection({
    //         host: process.env.DB_HOST,
    //         user: process.env.DB_USER,
    //         password: process.env.DB_PASSWORD,
    //         database: process.env.DB_NAME || 'quotes',
    //     });
    //     ctx.connection = connection;
    //     await next();
    //     await connection.close();
    // })
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port);

console.log(`Listening on port ${port}`);