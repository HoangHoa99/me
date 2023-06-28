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
    "CV_LINK": "https://drive.google.com/file/d/1QN6B-YRDEcNccPGEF2ReG5nc3CkRx2i8/view?usp=sharing"
  };

  ngOnInit() {
    this.sectionSelected('about');
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
    if ('about' === sectionName) {
      this.greetingMessage = 'Bo';

      setTimeout(() => {
        this.typingGreeting();
      }, 2000);
    }
    this.resetSection();
    this.selectedSection[sectionName] = true;
  }

  typingGreeting() {
    let message = 'njour!';
    let i = 0;
    this.interval = setInterval(() => {
      this.greetingMessage += message.charAt(i).toString();
      i++;
      if (this.greetingMessage.length == 8) {
        clearInterval(this.interval);
      }
      console.log(this.greetingMessage);
    }, 800);
  }
}
