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
    subject: "This is a test ...",
    text: "... and it works!",
  });

  console.log("Email successfully sent.");
}

main().catch((error) => console.log(error));
