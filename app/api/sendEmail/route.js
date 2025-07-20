import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, companyName, projectType, message } = body;

    const user = 'brainstormwbh@gmail.com';
    const pass = 'kvzl pxrx dygp pqvd'

    if (!user || !pass) {
      return new Response(JSON.stringify({ success: false, message: 'Server misconfiguration' }), {
        status: 500,
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    const mailOptions = {
      from: user,
      to: 'info@brainhouse.ai',
      // to: 'mbablubiswas@gmail.com',
      // replyTo: email,
      subject: `New Contact Request: ${projectType || 'General Inquiry'}`,
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company Name: ${companyName}
      Project Type: ${projectType}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Error sending email', error: error.message }), {
      status: 500,
    });
  }
}
