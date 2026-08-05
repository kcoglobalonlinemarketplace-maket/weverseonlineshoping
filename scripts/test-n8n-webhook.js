/* Test connection to the n8n Production Webhook URL */
const WEBHOOK_URL = 'https://wever.app.n8n.cloud/webhook/9e93fb8c-c3bb-4944-9f8f-81f4116c7910';

async function main() {
  const payload = {
    source: 'weverse-connectivity-test',
    message: 'test',
    ping: true,
    at: new Date().toISOString(),
  };

  console.log('Testing n8n Production Webhook...');
  console.log('URL:', WEBHOOK_URL);
  console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('---');

  const started = Date.now();
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const elapsed = Date.now() - started;
    const text = await res.text();
    console.log('HTTP Status:', res.status);
    console.log('Response time:', elapsed + 'ms');
    console.log('Response body:', text || '(empty)');
    console.log('---');
    if (res.ok) {
      console.log('RESULT: SUCCESS — webhook is reachable and accepted the test request.');
    } else {
      console.log('RESULT: SERVER_ERROR — webhook responded with error status ' + res.status);
    }
  } catch (err) {
    console.log('RESULT: CONNECTION_FAILED');
    console.log('Error:', err.message);
  }
}

main();

