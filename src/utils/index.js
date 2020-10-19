const LOGGED_KEY = 'LOGGED_KEY';

export function isLogged() {
  return !!localStorage.getItem(LOGGED_KEY);
}

export function login() {
  debugger;
  localStorage.setItem(LOGGED_KEY, LOGGED_KEY);
}

export function logout() {
  localStorage.removeItem(LOGGED_KEY);
}