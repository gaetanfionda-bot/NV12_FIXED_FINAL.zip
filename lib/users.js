let users = [
  {
    id: "u1",
    email: "test@test.com",
    password: "1234",
    lastSpin: null // roulette future
  }
];

export function loginUser(email, password) {
  return users.find(u => u.email === email && u.password === password);
}

export function registerUser(user) {
  users.push(user);
}
// Vérifier si un email existe déjà
export function userExists(email) {
  return users.some(u => u.email === email);
}

// Obtenir un utilisateur par son id
export function getUserById(id) {
  return users.find(u => u.id === id);
}

// Créer un utilisateur invité (sans email, sans mot de passe)
export function createGuestUser() {
  const id = "guest-" + Math.random().toString(36).substring(2, 9);
  const guest = {
    id,
    email: null,
    password: null,
    lastSpin: null
  };
  users.push(guest);
  return guest;
}
