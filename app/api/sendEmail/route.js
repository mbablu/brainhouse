import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    console.log('📨 Request body received:', body);

    const user = 'mbablubiswas@gmail.com';
    const pass = 'Shamima$Shammi#meem'

    if (!user || !pass) {
      console.error('❌ GMAIL_USER or GMAIL_PASS is missing in environment');
      return new Response(JSON.stringify({ success: false, message: 'Server misconfiguration' }), {
        status: 500,
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"Brainhouse Contact Form" <${user}>`,
      to: user,
      replyTo: email,
      subject: `New Contact Request: ${projectType || 'General Inquiry'}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully');

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error sending email', error: error.message }), {
      status: 500,
    });
  }
}
