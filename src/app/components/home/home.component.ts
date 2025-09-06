import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedTab: string = 'openai';
  profile = {
    name: 'Aruldass A',
    photoUrl: 'assets/Aruldass_img.jpeg',
    designation: 'Full-stack and AI front-end developer',
    linkedin: 'https://www.linkedin.com/in/aruldass-a-874093a1/',
    github: 'https://github.com/Aruldass-as',
    gmail: 'aruldass.as@gmail.com',
    phone: '+49 15212027492',
    mail:'admin@codecraft.life'
  };

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
