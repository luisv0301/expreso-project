import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      nombre: z.string(),
      email: z.string().email(),
      asunto: z.string(),
      empresa: z.string(),
      provincia: z.string(),
      mensaje: z.string(),
    }),
    handler: async ({ email, nombre, asunto, empresa, provincia, mensaje }) => {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["info@expresovitale.com"],
        subject: asunto,
        html: `
  <strong>¡Hola, haz recibido un nuevo correo de ${nombre}!</strong>
  <p>Correo:  ${email}</p>
  <p>Asunto: ${asunto}</p>
  <p>Empresa: ${empresa}</p>
  <p>Provincia: ${provincia}</p>
  <p>Mensaje: ${mensaje}</p>
`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
