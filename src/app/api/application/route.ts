import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_APP_EMAIL,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Send email
    const mailOptions = {
      from: `"Charlie Team" <${process.env.GMAIL_APP_EMAIL}>`,
      to: process.env.GMAIL_APP_EMAIL,
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: '<b>Hello world?</b>',
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
