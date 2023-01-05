const crypto = require('crypto');

function deriveKey(password) {
  // Key derivation function that does not use a salt
  const key = crypto.createHash('sha256').update(password).digest();
  return key;
}
