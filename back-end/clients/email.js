const nodemailer = require("nodemailer");

// https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/
class EmailClient {
  constructor(auth) {
    if (!auth.user) {
        throw new Error("Invalid email client configuration");
    }
    this.auth = auth;
  }

  async send({ subject, text, attachments }) {
    const transporter = nodemailer.createTransport(
      {
        service: "gmail",
        auth: {
          type: "OAuth2",
          ...this.auth,
        },
      },
      {
        // default message fields
        from: "EIPSI <eipsiproject@gmail.com>",
      }
    );

    const message = {
      // comma separated list of recipients
      to: "Eipsi Project Team <projecteipsi.dss@gmail.com>",
      subject,
      text,
      attachments: attachments && attachments.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content.split("base64,")[1],
        encoding: "base64",
      })),
    };

    await transporter.sendMail(message);
    transporter.close();

    console.log("Email successfully sent.");
  }
}

module.exports = EmailClient;
