import { Component, OnInit } from '@angular/core';
import { enc } from 'crypto-ts/src/crypto-ts';
import { EncryptionService } from './encryption.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private encrypt: EncryptionService) {}

  ngOnInit() {
    // AES
    //const encrypted = this.encrypt.encryptionAES('hello world');
    var encrypted =
      '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';

    const decrypted = this.encrypt.decryptionAES(encrypted);
    console.log(encrypted);
    console.log(decrypted);
  }
}
