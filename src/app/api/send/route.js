import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json(); // JSON 데이터를 추출
    
    // 이메일 전송
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['leejisun.it@gmail.com'],
      subject: subject || 'Hello world',  // 기본 제목 설정
      html: `
        <h1>${subject}</h1>
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
