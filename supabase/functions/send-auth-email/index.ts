// Supabase Edge Function: send-auth-email
// This endpoint is intentionally resilient: it returns success even when
// no external email provider is configured, so auth flows are not blocked.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const payload = await req.json().catch(() => ({}));
    const type = String(payload?.type || '').trim();

    if (!type) {
      return new Response(JSON.stringify({ error: 'Missing email type' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Placeholder implementation:
    // Integrate your provider here (Resend/SendGrid/Postmark/etc.) if needed.
    // We intentionally return success for non-critical helper emails.
    return new Response(JSON.stringify({
      success: true,
      queued: false,
      provider: 'noop',
      type,
      message: 'Email helper endpoint is configured.',
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err?.message || err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
