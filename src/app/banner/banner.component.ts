import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() bannerUrl: string;
  elementWidth: number;
  elementHeight: number;
  trustedUrl: SafeUrl;
  flag: boolean;
  constructor(private ele: ElementRef, private sanitizer: DomSanitizer,
    private renderer: Renderer2) { }

  ngOnInit() {
    console.log('ele', this.ele.nativeElement);
    this.elementWidth = this.ele.nativeElement.getBoundingClientRect().width;
    this.elementHeight = this.ele.nativeElement.getBoundingClientRect().height;
    let bannerUrl = this.bannerUrl;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.bannerUrl);
    if (bannerUrl.lastIndexOf('.png') > 1 || bannerUrl.lastIndexOf('.jpeg') > 1
      || bannerUrl.lastIndexOf('.jpg') > 1 || bannerUrl.lastIndexOf('.gif') > 1) {
      this.flag = true;
    } else if (bannerUrl.lastIndexOf('.swf') > 1) {
      this.flag = false;
    } else {
      console.log('Not valid file type');
    }

    this.renderer.listen(window, 'resize', () => {
      let width = this.ele.nativeElement.getBoundingClientRect().width;
      let height = this.ele.nativeElement.getBoundingClientRect().height;
      let img = this.ele.nativeElement.querySelector('.bannerImg');
      let swf = this.ele.nativeElement.querySelector('.bannerSwf');
      if (img !== null) {
        if (img) {
          this.renderer.setStyle(img, 'width', 100 + '%');
          this.renderer.setStyle(img, 'height', height);
        }
      } else {
        swf.setAttribute('width', 100 + '%');
        swf.setAttribute('height', height);
        let embed = swf.querySelector('embed');
        embed.setAttribute('width', 100 + '%')
        embed.setAttribute('height', height);
      }
    })

  }

}
