import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '~/components/EmailTemplate';

export type EmailSendBodyType = {
  email: string
}

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const requestData: EmailSendBodyType = await request.json()
    console.log({requestData})

    const responseData = await resend.emails.send({
      from: 'bubble <hello@bubblebook.app>',
      reply_to: 'bookwithbubble@gmail.com',
      to: [requestData.email],
      subject: 'Thank you for subscribing to bubble',
      react: EmailTemplate(requestData),
    });

    return Response.json(responseData);
  } catch (error) {
      console.error(error);
    return Response.json({ error });
  }
}