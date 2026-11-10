// Shared by the scripts in scripts/security/ (2026-11-10 audit): the live database through the
// service account in .env.server (never .env: Expo reads that file and copies it into its logs).
//   node --env-file=.env.server scripts/security/<script>.mjs           counts only, changes nothing
//   node --env-file=.env.server scripts/security/<script>.mjs --apply   makes the changes
// The scripts print counts and document ids only, never names, emails or keys.
import { adminToken, serviceAccount } from '../../api/_admin.mjs';
import { FieldValue, restAdmin } from '../../api/_admin-rest.mjs';

export const APPLY = process.argv.includes('--apply');

export function connect() {
  const account = serviceAccount();
  const admin = restAdmin();
  if (!account || !admin) {
    console.error('No service account. Run with: node --env-file=.env.server scripts/security/<script>.mjs');
    process.exit(1);
  }
  const base = `https://firestore.googleapis.com/v1/projects/${account.project_id}/databases/(default)/documents`;

  /** Every document of a top-level collection, only the named fields (one read per document). */
  async function listAll(collection, fields) {
    const token = await adminToken(account);
    const mask = fields.map((field) => `mask.fieldPaths=${encodeURIComponent(field)}`).join('&');
    const out = [];
    let pageToken = '';
    do {
      const response = await fetch(`${base}/${collection}?pageSize=300&${mask}${pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : ''}`, { headers: { authorization: `Bearer ${token}` } });
      if (!response.ok) throw new Error(`Could not list ${collection} (${response.status}).`);
      const page = await response.json();
      for (const item of page.documents ?? []) out.push({ id: item.name.split('/').pop(), fields: item.fields ?? {} });
      pageToken = page.nextPageToken ?? '';
    } while (pageToken);
    return out;
  }

  return { db: admin.db, FieldValue, listAll };
}

/** A plain value from a Firestore REST field. */
export function value(field) {
  if (!field) return undefined;
  if ('stringValue' in field) return field.stringValue;
  if ('booleanValue' in field) return field.booleanValue;
  if ('integerValue' in field) return Number(field.integerValue);
  if ('arrayValue' in field) return (field.arrayValue.values ?? []).map(value);
  if ('mapValue' in field) return Object.fromEntries(Object.entries(field.mapValue.fields ?? {}).map(([k, v]) => [k, value(v)]));
  return undefined;
}
