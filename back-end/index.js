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

async function sendToEmail(ctx, day, cardNumber) {
  const body = ctx.request.body;
  await emailClient.send({
    subject: `Results From Day ${day} Card ${cardNumber}`,
    text: JSON.stringify(body, null, 4),
  });
  ctx.status = 201;
}

async function sendToEmailWithImage(ctx, day, cardNumber) {
  let body = { ...ctx.request.body };
  const image = body.image;
  delete body.image;
  await emailClient.send({
    subject: `Results From Day ${day} Card ${cardNumber}`,
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
}

// add data for card which contains only text
router.post("/day1-1", (ctx) => sendToEmail(ctx, 1, 1));
router.post("/day1-2", (ctx) => sendToEmail(ctx, 1, 2));
router.post("/day2-2", (ctx) => sendToEmail(ctx, 2, 2));
router.post("/day3-2", (ctx) => sendToEmail(ctx, 3, 2));
router.post("/day4-1", (ctx) => sendToEmail(ctx, 4, 1));
router.post("/day4-2", (ctx) => sendToEmail(ctx, 4, 2));
router.post("/day5-2", (ctx) => sendToEmail(ctx, 5, 2));

// add data for card which contains more than text
router.post("/day2-1", async (ctx) => sendToEmailWithImage(ctx, 2, 1));
router.post("/day3-1", async (ctx) => sendToEmailWithImage(ctx, 3, 1));
router.post("/day5-1", async (ctx) => sendToEmailWithImage(ctx, 5, 1));

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
