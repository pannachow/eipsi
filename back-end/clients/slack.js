const { WebClient } = require("@slack/web-api");

class SlackClient {
  constructor({ token, channel }) {
    if (!token || !channel) {
      throw new Error("Invalid Slack client configuration");
    }
    this.client = new WebClient(token);
    this.channel = channel;
  }

  async send({ subject, text, attachments }) {
    await this.client.chat.postMessage({
      channel: this.channel,
      text: `*${subject}*\n\`\`\`${text}\`\`\``,
    });
    for (const attachment of attachments || []) {
      await this.client.files.upload({
        filename: attachment.filename,
        file: Buffer.from(attachment.content.split("base64,")[1], "base64"),
        channels: this.channel,
      });
    }

    console.log("Slack message successfully sent.");
  }
}

module.exports = SlackClient;
