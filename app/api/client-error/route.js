// app/api/client-error/route.js
export async function POST(req) {
  let body = {};
  try { body = await req.json(); } catch {}
  console.error('[ClientError]', body);
  return new Response(null, { status: 204 });
}
