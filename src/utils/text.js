/** Keep the last words on one line so a single word never sits alone. */
export const preventOrphan = (text, words = 2) => {
  if (!text) return text;
  const parts = String(text).trim().split(/\s+/);
  if (parts.length <= words) return parts.join('\u00A0');
  return `${parts.slice(0, -words).join(' ')} ${parts.slice(-words).join('\u00A0')}`;
};
