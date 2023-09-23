import { Component } from '@angular/core';
import { ServiceProviderService } from 'src/app/services/service-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  public tredingNewsData: any;

  constructor(private serviceProvider: ServiceProviderService){}

  ngOnInit(){
    this.getTrendingNews();
  }

  getTrendingNews(){
    this.serviceProvider.getApiData().subscribe(
      data=> {
        // console.info('xxxxxxxxxxxxxxxxxxxxxxxxxxxx')
        // console.info(data)
        this.tredingNewsData = data;
    });
  }

}
