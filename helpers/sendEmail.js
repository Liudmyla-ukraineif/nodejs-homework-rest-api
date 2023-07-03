const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_UKR_EMAIL, META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 252
  secure: true,
  auth: {
    user: META_UKR_EMAIL,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: META_UKR_EMAIL };
  await transport.sendMail(email);
  return true;
};

// const email = {
//   to: "yaraf28351@devswp.com",
//   from: META_UKR_EMAIL,
//   subject: "Test email",
//   html: "<p>Вам надійшов <strong>лист-проба</strong></p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

module.exports = sendEmail;
