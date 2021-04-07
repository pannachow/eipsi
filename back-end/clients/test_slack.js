const SlackClient = require("./slack");
require("dotenv").config();

async function main() {
  const slackClient = new SlackClient({
    token: process.env.SLACK_TOKEN,
    channel: process.env.SLACK_CHANNEL,
  });

  await slackClient.send({
    subject: "This is a test without image ...",
    text: "... and it works!",
  });
  await slackClient.send({
    subject: "This is a test with image ...",
    text: "... and it works!",
    attachments: [
      {
        filename: "image.png",
        content:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==",
      },
    ],
  });
}

main().catch((error) => console.log(error));
