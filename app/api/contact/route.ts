import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, company, role, subject, message } = body;

    // Ici, vous pouvez intégrer votre logique d'envoi d'email.
    // Options courantes sur Azure :
    // 1. Azure Communication Services (Email)
    // 2. SendGrid (Marketplace Azure)
    // 3. Nodemailer avec un compte SMTP (Outlook, Gmail, etc.)

    // Exemple de log pour le moment (visible dans les logs Azure/Vercel)
    console.log('Nouveau message de contact :', {
      firstname,
      lastname,
      email,
      company,
      role,
      subject,
      message
    });

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Message reçu" });
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire:', error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
