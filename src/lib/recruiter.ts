/**
 * Recruiter email assignment helper
 *
 * Rules:
 * - UniTech / UniTech Solutions -> nabila@tasknera.com
 * - Trinex Global / TrinexGlobal -> rashmikotekar@tasknera.com
 * - Preserves explicitly specified email if present
 * - Default fallback -> rashmikotekar@tasknera.com
 */
export function getRecruiterEmail(company?: string, explicitEmail?: string): string {
  if (explicitEmail && explicitEmail.trim().length > 0) {
    return explicitEmail.trim();
  }
  if (!company) {
    return 'rashmikotekar@tasknera.com';
  }
  const normalized = company.trim().toLowerCase().replace(/[\s\-_.]/g, '');
  if (normalized.includes('unitech')) {
    return 'nabila@tasknera.com';
  }
  if (normalized.includes('trinex')) {
    return 'rashmikotekar@tasknera.com';
  }
  return 'rashmikotekar@tasknera.com';
}
