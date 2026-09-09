import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

serve(async (req) => {
  // ✅ CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }

  try {
    const { name, email, company, enquiry_type, message } = await req.json();

    const enquiryLabels: Record<string, string> = {
      hiring: "Hiring / Recruitment",
      "hr-outsourcing": "HR & Payroll Outsourcing",
      staffing: "Contract Staffing",
      rpo: "RPO / Talent Partnership",
      other: "Other",
    };

    const enquiryLabel = enquiryLabels[enquiry_type] ?? enquiry_type;
    const firstName = name?.split(" ")[0] || name;

    const resendApiKey = (globalThis as any).Deno?.env.get("RESEND_API_KEY");

    // ── 1. Internal ops notification ──────────────────────────────────────────
    const opsHtmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <h2 style="color: #0fb88a; margin-bottom: 4px;">New Prospect Inquiry</h2>
        <p style="color: #6b7280; font-size: 14px; margin-top: 0;">A new inquiry was submitted via the TaskNera website.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top; font-weight: 600;">Name</td>
            <td style="padding: 8px 0; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email</td>
            <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #0fb88a;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Company</td>
            <td style="padding: 8px 0; color: #111827;">${company || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Enquiry Type</td>
            <td style="padding: 8px 0; color: #111827;">${enquiryLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #111827; white-space: pre-wrap;">${message || "—"}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">Submitted via tasknera.com contact form</p>
      </div>
    `;

    const opsResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["operations@tasknera.com"],
        subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
        html: opsHtmlBody,
      }),
    });

    if (!opsResponse.ok) {
      const errorData = await opsResponse.json();
      throw new Error(errorData?.message ?? "Failed to send ops notification email");
    }

    // ── 2. Prospect receipt / confirmation email ───────────────────────────────
    const prospectHtmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">

        <!-- Header -->
        <div style="background: #0d1f2d; padding: 32px 32px 28px;">
          <h1 style="color: #0fb88a; font-size: 22px; margin: 0 0 4px;">TaskNera</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0; letter-spacing: 1px; text-transform: uppercase;">HR &amp; Talent Solutions</p>
        </div>

        <!-- Body -->
        <div style="padding: 36px 32px;">
          <h2 style="color: #111827; font-size: 20px; margin: 0 0 8px;">Hi ${firstName}, we've received your enquiry!</h2>
          <p style="color: #4b5563; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
            Thank you for reaching out to TaskNera. Your message has been safely received and a member of our team will personally review it and get back to you.
          </p>

          <!-- Enquiry summary box -->
          <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px 24px; margin-bottom: 28px;">
            <p style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; margin: 0 0 14px;">Your Enquiry Summary</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #9ca3af; width: 130px; font-weight: 600;">Enquiry Type</td>
                <td style="padding: 6px 0; color: #111827;">${enquiryLabel}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 6px 0; color: #9ca3af; font-weight: 600;">Company</td>
                <td style="padding: 6px 0; color: #111827;">${company}</td>
              </tr>` : ""}
              ${message ? `<tr>
                <td style="padding: 6px 0; color: #9ca3af; font-weight: 600; vertical-align: top;">Message</td>
                <td style="padding: 6px 0; color: #111827; white-space: pre-wrap;">${message}</td>
              </tr>` : ""}
            </table>
          </div>

          <!-- Next steps timeline -->
          <h3 style="color: #111827; font-size: 15px; font-weight: 700; margin: 0 0 16px;">What happens next</h3>
          <div style="position: relative; padding-left: 0;">

            <!-- Step 1 -->
            <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start;">
              <div style="flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: #0fb88a; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; font-weight: 700; line-height: 32px; text-align: center;">1</div>
              <div>
                <p style="color: #111827; font-size: 14px; font-weight: 600; margin: 4px 0 2px;">Enquiry reviewed — within a few hours</p>
                <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.6;">Our operations team reads every submission and assigns it to the right consultant for your enquiry type.</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div style="display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start;">
              <div style="flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: #0fb88a; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; font-weight: 700; line-height: 32px; text-align: center;">2</div>
              <div>
                <p style="color: #111827; font-size: 14px; font-weight: 600; margin: 4px 0 2px;">Personal response — within 1 business day</p>
                <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.6;">A dedicated consultant will reply to <a href="mailto:${email}" style="color: #0fb88a;">${email}</a> with a tailored response and any clarifying questions.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div style="display: flex; gap: 16px; margin-bottom: 4px; align-items: flex-start;">
              <div style="flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: #0fb88a; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 13px; font-weight: 700; line-height: 32px; text-align: center;">3</div>
              <div>
                <p style="color: #111827; font-size: 14px; font-weight: 600; margin: 4px 0 2px;">Discovery call &amp; proposal — within 3–5 business days</p>
                <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.6;">We'll schedule a short discovery call to understand your needs in depth and follow up with a tailored proposal or engagement plan.</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 20px 32px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0 0 6px;">Need to reach us sooner? Email us at <a href="mailto:operations@tasknera.com" style="color: #0fb88a;">operations@tasknera.com</a></p>
          <p style="color: #d1d5db; font-size: 11px; margin: 0;">© TaskNera · HR &amp; Talent Solutions · tasknera.com</p>
        </div>

      </div>
    `;

    const prospectResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: [email],
        subject: `We've received your enquiry, ${firstName} — here's what happens next`,
        html: prospectHtmlBody,
      }),
    });

    if (!prospectResponse.ok) {
      // Log but don't fail — ops email already sent
      console.error("Prospect receipt email failed:", await prospectResponse.text());
    }

    const opsData = await opsResponse.json();

    return new Response(JSON.stringify({ success: true, id: opsData.id }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
});
