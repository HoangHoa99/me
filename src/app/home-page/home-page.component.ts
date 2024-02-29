import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  selectedSection: any;
  greetingMessage: string = 'Bo';
  interval: any;
  collapse: boolean = false;
  isMobile: boolean = false;

  urlMap = {
    "LINKEDIN": "https://www.linkedin.com/in/thaihoahoang/",
    "GITHUB": "https://github.com/HoangHoa99",
    "LEETCODE": "https://leetcode.com/HoangHoa99/",
    "GMAIL": "hoangthaihoa2122@gmail.com",
    "ZALO": "0869962279",
    "WHATSAPP": "0869962279",
    "SKYPE": "live:hoangthaihoa2122",
    "INCEPTIONLABS": "https://inceptionlabs.com.vn/",
    "CITYNOW": "https://citynow.vn/home",
    "TANCA": "https://tanca.io/",
    "SLASH": "https://slash.co/",
    "CV_LINK": "https://drive.google.com/file/d/1L2lsb1DhX5sE_bpldKqsE8cPOf-yyb6Z/view?usp=drive_link"
  };

  ngOnInit() {
    this.sectionSelected('about');

    let userAgent = navigator.userAgent;
    if(/Android|iPhone/.test(userAgent)) {
      this.isMobile = !this.isMobile;
    }
  }

  resetSection() {
    this.selectedSection = {
      about: false,
      experiences: false,
      blog: false,
      contact: false
    }
  }

  sectionSelected(sectionName: string) {
    this.collapse = !this.collapse;
    this.resetSection();
    this.selectedSection[sectionName] = true;
  }

  collapseMenu() {
    this.collapse = !this.collapse;
  }

  returnHome() {
    this.collapse = true;
    this.resetSection();
    this.selectedSection['about'] = true;
  }
}
