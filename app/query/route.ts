import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices(amount?: number) {
  let data;

  if (amount !== undefined) {
    data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = ${amount}
    `;
  } else {
    data = await sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
    `;
  }

  return data;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const amount = searchParams.get('amount');

    return Response.json(await listInvoices(amount ? parseInt(amount, 10) : undefined));
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
