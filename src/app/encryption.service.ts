import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  //key: string = '45a3fa71-56fd-4a15-78d3-1ef8sh43aa28';
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
    //console.log(msg);
    // Decrypt
    //msg = msg.replaceAll('.', '+').replaceAll('-', '/').replaceAll('~', '=');

    //console.log(msg);

    //var data = CryptoJS.enc.Base64.parse(msg);
    //var data = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(msg));

    //msg = CryptoJS.enc.Utf8.parse(msg);

    //msg = Buffer.from(msg, 'base64').toString('binary');

    //let vectorBytes = CryptoJS.enc.Utf8.parse(this.vector);

    //console.log(vectorBytes);

    //const derp = require('derive-password-bytes');

    //const keyBytes = derp(this.key, 'E7759E7DFC4CABBA', 2, 'sha1', 32);

    //const keyWords = CryptoJS.enc.Utf8.parse(keyBytes);

    // well known algorithm to generate key
    //let _key = CryptoJS.enc.Utf8.parse(this.key);
    //let _salt = CryptoJS.enc.Utf8.parse(this.salt);

    // var keyWords = CryptoJS.PBKDF2(_key, _salt, {
    //   keySize: 256 / 32,
    //   iterations: 2,
    // });

    // let cipher = CryptoJS.algo.AES.createDecryptor(keyWords, {
    //   iv: vectorBytes,
    // });

    // const decryptedWordArray = cipher.process(msg);

    //const decryptedWordArray = CryptoJS.AES.decrypt(
    //{ ciphertext: data },
    //msg,
    //keyWords,
    //{
    //iv: vectorBytes,
    //padding: CryptoJS.pad.Pkcs7,
    //mode: CryptoJS.mode.CBC,
    //keySize: 256,
    //blockSize: 128,
    //}
    //);

    //const decryptedWordArray = CryptoJS.AES.decrypt(
    //{ ciphertext: data },
    //msg,
    //keyWords,
    //{
    //iv: vectorBytes,
    //padding: CryptoJS.pad.Pkcs7,
    //mode: CryptoJS.mode.CBC,
    //keySize: 256,
    //blockSize: 128,
    //}
    //);

    let _key = CryptoJS.enc.Utf8.parse(this.key);
    let _salt = CryptoJS.enc.Utf8.parse(this.salt);

    var keyWords = CryptoJS.PBKDF2(this.key, _salt, {
      keySize: 256/32,
      iterations: 2,
    });

    console.log(keyWords);


    var key = CryptoJS.enc.Utf8.parse(this.key); // Convert into WordArray (using Utf8)
    var iv = CryptoJS.enc.Utf8.parse(this.vector);
    //CryptoJS.lib.WordArray.create([0x00, 0x00, 0x00, 0x00]); // Use zero vector as IV
    var decrypted = CryptoJS.AES.decrypt(msg, keyWords, { iv: iv }); // By default: CBC, PKCS7
    return decrypted.toString(CryptoJS.enc.Utf8);

    const plaintext = decrypted.toString(CryptoJS.enc.Utf8); //CryptoJS.enc.Utf16LE.stringify(decryptedWordArray);

    //console.log(plaintext);

    return JSON.parse(plaintext);
  }
}
