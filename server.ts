import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Form Submission Integrations (Email + Google Sheets)
  app.post("/api/inquiry-integration", async (req, res) => {
    const { parentName, email, message, type, childAge } = req.body;

    try {
      // 1. Email Notification (Optional - requires SMTP config)
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Kids Club Website" <${process.env.SMTP_USER}>`,
          to: "muselec52@gmail.com", // Admin email
          subject: `New ${type} Inquiry from ${parentName}`,
          text: `Name: ${parentName}\nEmail: ${email}\nAge: ${childAge}\nType: ${type}\nMessage: ${message}`,
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

      // 2. Google Sheets Integration (Optional - requires Service Account)
      if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
        const serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
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
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
