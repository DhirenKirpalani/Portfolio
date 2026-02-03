import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // CSRF Protection: Verify request origin
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    
    // Allow requests from same origin or localhost for development
    const isLocalhost = host?.includes('localhost') || host?.includes('127.0.0.1');
    const isSameOrigin = origin && host && origin.includes(host);
    
    if (!isLocalhost && !isSameOrigin) {
      return NextResponse.json(
        { error: 'Forbidden: Invalid origin' },
        { status: 403 }
      );
    }

    const { email, message } = await request.json();

    // Input validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length (max 5000 characters)
    if (typeof message !== 'string' || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be a string with maximum 5000 characters' },
        { status: 400 }
      );
    }

    // Validate message minimum length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitizedEmail = DOMPurify.sanitize(email);
    const sanitizedMessage = DOMPurify.sanitize(message);

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'dhirenkirpalani2308@gmail.com',
      replyTo: sanitizedEmail,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
