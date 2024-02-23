require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Nylas = require("nylas");

const app = express();
const port = process.env.PORT || 3001;

Nylas.config({
  clientId: process.env.NYLAS_CLIENT_ID,
  clientSecret: process.env.NYLAS_CLIENT_SECRET,
});

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, body } = req.body;
  const nylas = Nylas.with(process.env.NYLAS_ACCESS_TOKEN);

  const draft = nylas.drafts.build({
    subject: subject,
    body: body,
    to: [{ email: to }],
  });

  try {
    const sentEmail = await draft.send();
    res.status(200).json({ message: "Email sent successfully", sentEmail });
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
