import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
selectedTab: 'openai' | 'llamaIndex' | 'fitness' | 'gemini'| 'claude' | 'perplexity' | 'about' | 'doc-assist' | 'web-scrape' = 'openai';
isCollapsed = false;

profile = {
    name: 'Aruldass A',
    photoUrl: 'assets/Aruldass_img.jpeg',
    designation: 'Full-Stack & AI Integration Engineer',
    linkedin: 'https://www.linkedin.com/in/aruldass-a-874093a1/',
    github: 'https://github.com/Aruldass-as',
    gmail: 'aruldass.as@gmail.com',
    phone: '+49 15212027492',
    mail:'admin@codecraft.life'
};


constructor() { }


ngOnInit(): void {
// restore sidebar state from localStorage
const collapsed = localStorage.getItem('dashboard.sidebar.collapsed');
this.isCollapsed = collapsed === 'true';
}


selectTab(tab: 'openai' | 'llamaIndex' | 'fitness' | 'gemini'| 'claude' | 'perplexity' | 'about' | 'doc-assist' | 'web-scrape') {
this.selectedTab = tab;
}


toggleSidebar() {
this.isCollapsed = !this.isCollapsed;
localStorage.setItem('dashboard.sidebar.collapsed', String(this.isCollapsed));
}


onSearch(query: string) {
console.log('search:', query);
// implement search routing or filtering
}


openProfile() {
// open quick profile modal or route to settings
console.log('open profile');
}
}
