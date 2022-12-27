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
      '7aMvgSZy80N-n17BDztPBTTq1UugfMlS2qPNEEasGUEbdbklMJTnG.BtohgfZS5kYtcy5WnEwQzznK-gDKPHsqqbiyjNNA..n3RTZo1XTXnYtZ6vNhDUX-hwbeOOwmyClHhrIkQl3fs1jQkRjxoWIKrNO6EvhNWCCNFuHTTyjRbR.j9zYsnTpU4r33Xo.JBLNDA8NX84aXPQDVwrBUTkRj6AGqp8OUdje5EZbXabq8Id4ZyapgVv-Ki7YAoDEQNXDinQk5EDEe9SWhOVTocNwn44Y8vAExLKlHHvaAcqG6eUz3qnjwurnafN5wafiAie2cc8XLK-NMtu1B0t1U1jaCYmqe4kHmNkwp4AQoOFVWMxUCgSftRAmKaAl6dD0.H9iR4fkMHGx44iMz7qXBrBBo7gydRd0WSqLjzlgTgGNxwZ23WKUUTuOBOT2k--kAIHdCVsygA2cFj9P-4QEe7rJyvLpjILiDD4lbbvtgMIPGrp60WkXIxmp5JU7EUCk31pXnHZsvorgqdeoEKaDR2REgTggaWi9QHf-l6sDnycOL43Tj.K5PMdes23AWXCrVQLjzgJiyHGZDOZbI3sMytDnLVXXsHmbxrDkZCMi7nKq-g2K3liudohpwqkOkKozuL4nSyaBVJcgkgiyHvEXDayp9v6fHA16I6vu5PCEf6ogQAo6b6CYSIFmBcGbOJlTQatX3STHG8c-ppiel9yNvS.5Hbcaq3v4lhqpsEk8s9wwgASZAQlAmKirLR8iDtYSq3l-T7HtkXuVk1DVAG--L4M9aoO8FhMrrfrSppNgoZE7CbpAWwtaebz4lOPZoJtYpUFv1vYxp11P1e-wmc29hYBcW3vhjVeLmk05X4T6KNQW2DzHOT4gyLo8gWI2qFyPUuUSzCeAHDfRRq4VLMRkDhP2L5icVjajPAoaKoZOJe49tRaD8KGNMUaIwXRzkedu854uTKU8Oz6EW.ssSAT16D-fW4KJmzopdgIYX6UuwhelSAZ4iIkYV4q--p1byfvUXtVCJG-N1gp870Sle3tdly0d1RJZzBztLINdY5KqkADsG8TEBkNNREDSpYRqO5SgYlO05nsJntJIbWtNNEkk.5PL-53V84HlxC3dJlFf9cMzC8fp8ZhLiXhQwtJGZGTD.qoEIzDZLgvcRCzci9gH9J7DVNKSLkUyUtDMSTExi3gghEqdOuWi2ymArignI742pQj51toFdQ3LBHAZKuQvvhNLSG.iTka6Hl8edrJPmBCQm67A9i2M9Cx5JBsc7dXL5yxxVuitqFIoUD9wQH8.Ds0YKMZmWECbeaVAUmjgD-HYVeKv5oovuQ7m3kyK.soj6VCqktySWGgqHuN8tjeNMG8f2JAkegdXKz08kTMPbSkDim6VU8eGD4oCMrQVC-oErRp-IGNAenxtBt9TcfOdU2WIMOqr0T5Xw-WUSOr-BVdo2WkdAJ0PnGnIXZGh4MIJtg8wGWyVMEOxPU58i3FpkY15YF8YOfsVNgMbZpjn4VJOXAYCDUypq36iR8i-KNh.02wQNQ3UrwKIWhf6HXPD44wyNtz-sGKQy.vSdumS.OX7ZODZtBdmIo7D3rh85nC.-xZuE3g6R-zb1Q.I4VoduLV7i.uiiGLPop9nEcD9FpqCT270a8ocR3qllkMt1GrsGZphAAYsiJj6fhVt7uWF.D-L5-vrkeI8h5cRnX5TD6MjRYWm84BpDwf1kmtwZJA5rJbsTZ3rF2tj7dySRMnPZhakHu78F8nNXG2-K54JEkJ.RSh9JbAkUjZLTpUgXkcrW1nk2Th8lWnSmaorgXY8y1lN0f5mOCIgy3-AdQSwH2EAtaqFIR13gBQLJSmNxSZpI9Z5xPcoW9El6XkDnMmRTaXhkuR6YLkTYouWshhGZPK9fwWcGE4PAWZfZds5HjELAVk4PpYSg9.eMU.ZWTZnsdawN-KRLbkJtQykdkgdnVYZQJuD2F-T3QDg-OkgoxiTf-gVJ7j5eg8kmytOwEOxZfFzC6.at-f42ek80XqSatIoKztp.WxdtHFVqBve-yJWnhtT48uAQkROWmY1tkddkUnHUA.kmD-VA.yUlXyEjm4lQ2tSFT9e1AjeOhShcniJXowmJfE9OlQjr-rcG81hRjz3Iq6dqpRNRKCLYpSR7TiRup22R5AhVszxuIhlrwSUDhPfMerqKasGTCIbtFG6BWYi8NwkjUcyM0CyYwXIa0mH5XXlJM2uKjlMaP7seiJKjBe';

    encrypted.replace('.', '+').replace('-', '/').replace('~', '=');

    encrypted = Buffer

    const decrypted = this.encrypt.decryptionAES(encrypted);
    console.log(encrypted);
    console.log(decrypted);
  }
}
