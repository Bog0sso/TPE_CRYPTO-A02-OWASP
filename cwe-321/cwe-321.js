const KEY = "my secret key"; // clé de chiffrement prédéfinie

function encrypt(message) {
    const encrypted_message = []; // message chiffré

    // chiffrer le message en utilisant la clé de chiffrement prédéfinie
    for (let i = 0; i < message.length; i++) {
        encrypted_message.push(message.charCodeAt(i) ^ KEY.charCodeAt(i % KEY.length)); // XOR bit à bit
    }

    return encrypted_message;
}

function main() {
    const message = prompt("Enter message to encrypt:"); // message à chiffrer
    const encrypted_message = encrypt(message);

    console.log("Encrypted message:", encrypted_message);
}

main();
