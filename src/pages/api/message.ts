export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  // Send the email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "****",
      pass: import.meta.env.GOOGLE_APP_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: '"Expreso Vitale" <no-reply@expreso-vitale.com>',
    to: "luis@expreso-vitale.com",
    subject: "Contacto de Expreso Vitale",
    text: `Hola ${name},

Te escribimos por correo electrónico para informarte sobre nuestro servicio.

Hola ${name},

Te escribimos por correo electrónico para informarte sobre nuestro servicio.

${message}

Muchas gracias por tu interés.

Expreso Vitale`,
  });
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
