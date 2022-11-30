export function isOffline(e) {
  e.currentTarget.classList.add('offline');
  e.currentTarget.classList.remove('online');
}
