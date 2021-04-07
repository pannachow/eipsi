const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const Router = require("koa-router");
const EmailClient = require("./clients/email");
const SlackClient = require("./clients/slack");
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
const slackClient = new SlackClient({
  token: process.env.SLACK_TOKEN,
  channel: process.env.SLACK_CHANNEL,
});

async function sendToEmailAndSlack(ctx, day, cardNumber) {
  const body = ctx.request.body;
  const image = body.image;
  delete body.image;

  const subject = `Results From Day ${day} Card ${cardNumber}`;
  const text = JSON.stringify(body, null, 4);
  const attachments = image
    ? [
        {
          filename: "image.png",
          content: image,
        },
      ]
    : [];

  const [emailResult, slackResult] = await Promise.allSettled([
    emailClient.send({
      subject,
      text,
      attachments,
    }),
    slackClient.send({
      subject,
      text,
      attachments,
    }),
  ]);

  let numFailed = 0;
  if (emailResult.status === "rejected") {
    console.error(`Sending email failed due to ${emailResult.reason}.`);
    numFailed++;
  }
  if (slackResult.status === "rejected") {
    console.error(`Sending Slack message failed due to ${slackResult.reason}.`);
    numFailed++;
  }
  if (numFailed === 2) {
    ctx.status = 500;
  } else {
    ctx.status = 201;
  }
}

router.post("/day1-1", (ctx) => sendToEmailAndSlack(ctx, 1, 1));
router.post("/day1-2", (ctx) => sendToEmailAndSlack(ctx, 1, 2));
router.post("/day2-1", (ctx) => sendToEmailAndSlack(ctx, 2, 1)); // has image
router.post("/day2-2", (ctx) => sendToEmailAndSlack(ctx, 2, 2));
router.post("/day3-1", (ctx) => sendToEmailAndSlack(ctx, 3, 1)); // has image
router.post("/day3-2", (ctx) => sendToEmailAndSlack(ctx, 3, 2));
router.post("/day4-1", (ctx) => sendToEmailAndSlack(ctx, 4, 1));
router.post("/day4-2", (ctx) => sendToEmailAndSlack(ctx, 4, 2));
router.post("/day5-1", (ctx) => sendToEmailAndSlack(ctx, 5, 1)); // has image
router.post("/day5-2", (ctx) => sendToEmailAndSlack(ctx, 5, 2));

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
