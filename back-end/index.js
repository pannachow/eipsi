const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const Router = require("koa-router");
const EmailClient = require("./email");
require("dotenv").config();

const port = parseInt(process.env.PORT || "3001");
const app = new Koa();
const router = new Router();
const emailClient = new EmailClient({
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  clientId: process.env.EMAIL_CLIENT_ID,
  clientSecret: process.env.EMAIL_CLIENT_SECRET,
  refreshToken: process.env.EMAIL_REFRESH_TOKEN,
});

// get data
router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = "hello";
});

// add data
router.post("/day1-2", async (ctx) => {
  const body = ctx.request.body;
  await emailClient.send({
    subject: "Results From Day 1 Card 2",
    text: JSON.stringify(body, null, 4),
  });
  ctx.status = 201;
});

router.post("/day2-1", async (ctx) => {
  let body = { ...ctx.request.body };
  const image = body.image;
  delete body.image;
  await emailClient.send({
    subject: "Results From Day 2 Card 1",
    text: JSON.stringify(body, null, 4),
    attachments: [
      {
        // encoded string as an attachment
        filename: "image.png",
        content: image.split("base64,")[1],
        encoding: "base64",
      },
    ],
  });
  ctx.status = 201;
});

// add data for day3-2
router.post("/day3-2", async (ctx) => {
  const body = ctx.request.body;
  await emailClient.send({
    subject: "Results From Day 3 Card 2",
    text: JSON.stringify(body, null, 4),
  });
  ctx.status = 201;
});

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async (ctx, next) => {
    console.log(ctx.request.body);
    await next();
  })
  .listen(port);

console.log(`Listening on port ${port}`);
