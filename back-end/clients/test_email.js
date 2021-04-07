const EmailClient = require("./email");
require("dotenv").config();

async function main() {
  const emailClient = new EmailClient({
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
  });

  await emailClient.send({
    subject: "This is a test without image ...",
    text: "... and it works!",
  });
  await emailClient.send({
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
