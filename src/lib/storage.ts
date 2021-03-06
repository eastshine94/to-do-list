export function getSessionItem(key: string) {
  const jsonStr = window.sessionStorage.getItem(key);
  if (!jsonStr) return null;
  const value = JSON.parse(jsonStr);
  return value;
}

export function setSessionItem(key: string, value: unknown) {
  const jsonStr = JSON.stringify(value);
  sessionStorage.setItem(key, jsonStr);
}

export function removeSessionItem(key: string) {
  window.sessionStorage.removeItem(key);
}
