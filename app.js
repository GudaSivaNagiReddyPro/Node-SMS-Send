require("dotenv").config();
const express = require("express");
const client = require("twilio")(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);
const app = express();

client.messages
  .create({
    body: "Hello",
    to: "+9199XXXXXXXX", // Text your number
    from: process.env.PHONE_NUMBER,
  })
  .then((message) => console.log(message.sid))
  .catch((error) => {
    console.log(error.message);
  });

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
