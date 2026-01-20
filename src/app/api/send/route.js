import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message, company, recaptchaToken } = await req.json();

    // 🤖 honeypot — 봇은 항상 채움
    if (company) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // tocken 없으면 차단
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Missing reCAPTCHA token" },
        { status: 400 }
      );
    }    

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    
    const verifyData = await verifyRes.json();
    
    if (!verifyData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }
    
    // action 위조 방지
    if (verifyData.action !== "contact") {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA action" },
        { status: 403 }
      );
    }
    
    // 점수 기준 (0~1)
    if (verifyData.score < 0.6) {
      return NextResponse.json(
        { error: "Bot detected" },
        { status: 403 }
      );
    }
    
    
    // 이메일 전송
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['leejisun.it@gmail.com'],
      subject: subject || 'Hello world',  // 기본 제목 설정
      html: `
        <h1>${subject}</h1>
        <h2>Email:${email}</h2>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `
    });

    return NextResponse.json(data);  // 성공적으로 전송 시 응답
  } catch (error) {
    // 오류 발생 시 응답
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
