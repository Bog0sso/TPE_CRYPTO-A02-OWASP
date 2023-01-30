const crypto = require('crypto');

function deriveKey(password, salt) {
  // Key derivation function that uses a salt
  const key = crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha256');
  return key;
}
