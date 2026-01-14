import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const NOTIFICATION_EMAIL = "hbjuan580@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission request");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Form data received:", { name: formData.name, email: formData.email });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save to database
    const { data: insertedData, error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Error al guardar el mensaje" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Message saved to database:", insertedData.id);

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "SuperSEO <onboarding@resend.dev>",
      to: [NOTIFICATION_EMAIL],
      subject: `🦸 Nuevo mensaje de contacto - ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7C3AED, #DC2626); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #7C3AED; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #7C3AED; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🦸 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 5px 0 0;">SuperSEO - Formulario Web</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nombre:</span>
                <p style="margin: 5px 0;">${formData.name}</p>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <p style="margin: 5px 0;"><a href="mailto:${formData.email}">${formData.email}</a></p>
              </div>
              ${formData.phone ? `
              <div class="field">
                <span class="label">Teléfono:</span>
                <p style="margin: 5px 0;"><a href="tel:${formData.phone}">${formData.phone}</a></p>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Mensaje:</span>
                <div class="message-box">
                  <p style="margin: 0; white-space: pre-wrap;">${formData.message}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de superseo.es</p>
              <p>Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Delete message from database after successful email send
    const { error: deleteError } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", insertedData.id);

    if (deleteError) {
      console.error("Error deleting message from database:", deleteError);
      // Continue anyway since email was sent successfully
    } else {
      console.log("Message deleted from database:", insertedData.id);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Mensaje enviado correctamente"
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
