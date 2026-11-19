export type DemoProfile = { name: string; email: string };
export type DemoEnquiry = { id: string; name: string; email: string; topic: string; message: string; createdAt: string };
const PROFILE_KEY = 'maison-demo-profile';
const ENQUIRY_KEY = 'maison-demo-enquiries';
const NEWSLETTER_KEY = 'maison-demo-newsletter';

export function getDemoProfile(): DemoProfile | null {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null') as DemoProfile | null; }
  catch { return null; }
}
export function setDemoProfile(profile: DemoProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  window.dispatchEvent(new Event('maison:profile'));
}
export function clearDemoProfile(): void {
  localStorage.removeItem(PROFILE_KEY);
  window.dispatchEvent(new Event('maison:profile'));
}
export function getDemoEnquiries(): DemoEnquiry[] {
  try { return JSON.parse(localStorage.getItem(ENQUIRY_KEY) || '[]') as DemoEnquiry[]; }
  catch { return []; }
}
export function saveDemoEnquiry(enquiry: Omit<DemoEnquiry, 'id' | 'createdAt'>): void {
  const entries = getDemoEnquiries();
  entries.unshift({ ...enquiry, id: crypto.randomUUID(), createdAt: new Date().toISOString() });
  localStorage.setItem(ENQUIRY_KEY, JSON.stringify(entries));
}
export function saveDemoSubscription(email: string): void {
  const entries: string[] = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]');
  if (!entries.includes(email)) entries.push(email);
  localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(entries));
}
export function removeDemoSubscription(email: string): void {
  const entries: string[] = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]');
  localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(entries.filter(entry => entry !== email)));
}
