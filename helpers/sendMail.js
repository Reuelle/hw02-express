const nodemailer = require("nodemailer");
require("dotenv").config();

const nodemailerConfig = {
  
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
   
    user: "joanne.dickens@ethereal.email",
    pass: "9JJB23YmnKwDTYusBN",
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "joanne.dickens@ethereal.email" };
    await transport.sendMail(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;