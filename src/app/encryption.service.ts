import { Injectable } from '@angular/core';
import * as CryptoTS from 'crypto-ts';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  key: string = '45a3fa71-56fd-4a15-78d3-1ef8sh43aa28';
  appProperties = {
    VALUES: {
      KEY: 'MTIzNDU2Nzg5MEFCQ0RFRkdISUpLTE1O',
      IV: 'MTIzNDU2Nzg=',
    },
  };

  constructor() {}

  encryptionAES(msg) {
    // Encrypt
    const ciphertext = CryptoTS.AES.encrypt(msg, this.key);
    return ciphertext.toString();
  }

  decryptionAES(msg) {
    // Decrypt
    const bytes = CryptoTS.AES.decrypt(msg, this.key);
    const plaintext = bytes.toString(CryptoTS.enc.Utf8);
    return plaintext;
  }
}
