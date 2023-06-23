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
