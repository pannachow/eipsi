const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const Router = require('koa-router');
const EmailClient = require('./email');
require('dotenv').config();

const port = parseInt(process.env.PORT || '3001');
const app = new Koa();
const router = new Router();
const emailClient = new EmailClient({
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN
});

// get data
router.get('/', async (ctx) => {
    ctx.status = 200;
    ctx.body = "hello";
});

// add data
router.post('/day1-2', async (ctx) => {
    const body = ctx.request.body;
    console.log(body);
    await emailClient.send({
        subject: "Results From Day 1 Card 2",
        text: JSON.stringify(body, null, 4),
    });
    ctx.status = 201;
});

app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port);

console.log(`Listening on port ${port}`);