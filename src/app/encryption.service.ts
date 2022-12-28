import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  key: string = 'Fr33tim3!#12345512987651';
  vector: string = '15D47B8C98F88FD1';
  salt: string = 'E7759E7DFC4CABBA';

  constructor() {}

  encryptionAES(msg) {
    // Encrypt
    const ciphertext = CryptoJS.AES.encrypt(msg, this.key);
    return ciphertext.toString();
  }

  decryptionAES(msg) {
    // Decrypt
    msg = msg.replaceAll('.', '+').replaceAll('-', '/').replaceAll('~', '=');

    let _salt = CryptoJS.enc.Utf8.parse(this.salt);
    var iv = CryptoJS.enc.Utf8.parse(this.vector);

    var keyWords = CryptoJS.PBKDF2(this.key, _salt, {
      keySize: 256 / 32,
      iterations: 2,
    });

    var decrypted = CryptoJS.AES.decrypt(msg, keyWords, { iv: iv });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
