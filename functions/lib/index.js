"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const google_spreadsheet_1 = require("google-spreadsheet");
const google_auth_library_1 = require("google-auth-library");
admin.initializeApp();
exports.api = functions.https.onRequest(async (req, res) => {
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
                const transporter = nodemailer_1.default.createTransport({
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
                const serviceAccountAuth = new google_auth_library_1.JWT({
                    email: saEmail,
                    key: saKey.replace(/\\n/g, '\n'),
                    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
                });
                const doc = new google_spreadsheet_1.GoogleSpreadsheet(sheetId, serviceAccountAuth);
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
        }
        catch (error) {
            console.error("Integration Error:", error);
            res.status(500).json({ error: "Failed to process integrations" });
        }
    }
    else {
        res.status(404).send('Not Found');
    }
});
//# sourceMappingURL=index.js.map