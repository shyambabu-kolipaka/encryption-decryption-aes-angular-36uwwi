import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  key: string = '45a3fa71-56fd-4a15-78d3-1ef8sh43aa28';
  vector: string = '15D47B8C98F88FD1';
  salt: string = 'E7759E7DFC4CABBA';

  constructor() {}

  encryptionAES(msg) {
    // Encrypt
    const ciphertext = CryptoJS.AES.encrypt(msg, this.key);
    return ciphertext.toString();
  }

  decryptionAES(msg) {
    console.log(msg);
    // Decrypt
    msg = msg.replaceAll('.', '+').replaceAll('-', '/').replaceAll('~', '=');

    console.log(msg);

    //msg = CryptoJS.enc.Base64.parse(msg);
    var data = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(msg));

    //msg = CryptoJS.enc.Utf8.parse(msg);

    //msg = Buffer.from(msg, 'base64').toString('binary');

    let vectorBytes = CryptoJS.enc.Utf8.parse(this.vector);

    console.log(vectorBytes);

    //const derp = require('derive-password-bytes');

    //const keyBytes = derp(this.key, 'E7759E7DFC4CABBA', 2, 'sha1', 32);

    //const keyWords = CryptoJS.enc.Utf8.parse(keyBytes);

    // well known algorithm to generate key
    var keyWords = CryptoJS.PBKDF2(this.key, this.salt, {
      keySize: 32,
      iterations: 2,
      hasher: CryptoJS.algo.SHA1,
    });

    const bytes = CryptoJS.AES.decrypt({ ciphertext: data }, keyWords, {
      iv: vectorBytes,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
      //keySize: 256,
      //blockSize: 128,
    });

    const plaintext = bytes.toString(CryptoJS.enc.Uft8);

    console.log(plaintext);

    return plaintext;
  }
}
