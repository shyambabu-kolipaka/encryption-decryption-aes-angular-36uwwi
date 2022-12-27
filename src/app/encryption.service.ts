import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  key: string = '45a3fa71-56fd-4a15-78d3-1ef8sh43aa28';
  vector: string = '15D47B8C98F88FD1';
  salt: string = 'E7759E7DFC4CABBA';

  appProperties = {
    VALUES: {
      KEY: 'MTIzNDU2Nzg5MEFCQ0RFRkdISUpLTE1O',
      IV: 'MTIzNDU2Nzg=',
    },
  };

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

    msg = Buffer.from(msg, 'base64').toString('binary');

    let vectorBytes = CryptoJS.enc.Utf8.parse(this.vector);

    console.log(vectorBytes);

    const derp = require('derive-password-bytes');

    const keyBytes = derp(this.key, 'E7759E7DFC4CABBA', 2, 'sha1', 32);

    const bytes = CryptoJS.AES.decrypt(msg, this.key, {
      mode: CryptoJS.mode.CBC,
      iv: vectorBytes,
    });

    const plaintext = bytes.toString(CryptoJS.enc.Utf8);

    console.log(plaintext);

    return plaintext;
  }
}
