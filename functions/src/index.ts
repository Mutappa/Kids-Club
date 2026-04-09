import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

admin.initializeApp();

export const api = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
    return;
  }

  if (req.path === '/inquiry-integration' && req.method === 'POST') {
    const { parentName, email, message, type, childAge } = req.body;

    try {
      // 1. Email Notification
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      
      if (smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: `"Kids Club Website" <${smtpUser}>`,
          to: "muselec52@gmail.com",
          subject: `New ${type} Inquiry from ${parentName}`,
          html: `
            <h3>New Inquiry Received</h3>
            <p><strong>Name:</strong> ${parentName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Child's Age:</strong> ${childAge}</p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      }

      // 2. Google Sheets Integration
      const sheetId = process.env.GOOGLE_SHEET_ID;
      const saEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
      const saKey = process.env.GOOGLE_PRIVATE_KEY;

      if (sheetId && saEmail && saKey) {
        const serviceAccountAuth = new JWT({
          email: saEmail,
          key: saKey.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow({
          'Date': new Date().toLocaleString(),
          'Parent Name': parentName,
          'Email': email,
          'Child Age': childAge,
          'Type': type,
          'Message': message,
        });
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Integration Error:", error);
      res.status(500).json({ error: "Failed to process integrations" });
    }
  } else {
    res.status(404).send('Not Found');
  }
});
