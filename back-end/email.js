const nodemailer = require("nodemailer");

// https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/
class EmailClient {
  constructor(auth) {
    if (!auth.user) {
        throw new Error("Invalid email client configuration");
    }
    this.auth = auth;
  }

  async send({ subject, text }) {
    // Create a SMTP transporter object
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
        // sender info
        from: "EIPSI <eipsiproject@gmail.com>",
      }
    );

    // Message object
    const message = {
      // Comma separated list of recipients
      to: "Eipsi Project Team <projecteipsi.dss@gmail.com>",
      // Subject of the message
      subject,
      // plaintext body
      text,

      //   // HTML body
      //   html:
      //     '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
      //     '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

      //   // An array of attachments
      //   attachments: [
      //     // String attachment
      //     {
      //       filename: "notes.txt",
      //       content: "Some notes about this e-mail",
      //       contentType: "text/plain", // optional, would be detected from the filename
      //     },

      //     // Binary Buffer attachment
      //     {
      //       filename: "image.png",
      //       content: Buffer.from(
      //         "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/" +
      //           "//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U" +
      //           "g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC",
      //         "base64"
      //       ),

      //       cid: "note@example.com", // should be as unique as possible
      //     },

      //     // File Stream attachment
      //     {
      //       filename: "nyan cat ✔.gif",
      //       path: __dirname + "/assets/nyan.gif",
      //       cid: "nyan@example.com", // should be as unique as possible
      //     },
      //   ],
    };

    const info = await transporter.sendMail(message);

    console.log("Message sent successfully!");

    // only needed when using pooled connections
    transporter.close();
  }
}

module.exports = EmailClient;
