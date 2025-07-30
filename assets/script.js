// Shared JS for all pages
function getUser(email) {
  const user = localStorage.getItem(email);
  return user ? JSON.parse(user) : null;
}
function setUser(email, data) {
  localStorage.setItem(email, JSON.stringify(data));
}
function setCurrentUser(email) {
  localStorage.setItem('currentUser', email);
}
function getCurrentUser() {
  return localStorage.getItem('currentUser');
}
function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}
function validateEmail(email) {
  return /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email);
}
function showError(msg) {
  const err = document.getElementById('error');
  if (err) { err.textContent = msg; err.style.display = 'block'; }
}
function showSuccess(msg) {
  const succ = document.getElementById('success');
  if (succ) { succ.textContent = msg; succ.style.display = 'block'; }
}
function clearMessages() {
  const err = document.getElementById('error');
  const succ = document.getElementById('success');
  if (err) err.textContent = '';
  if (succ) succ.textContent = '';
}
