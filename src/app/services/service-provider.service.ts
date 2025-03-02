import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { catchError, map } from 'rxjs/operators';
// import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceProviderService {

  constructor(
    public http: HttpClient
  ) { }

  getApiData(){
     return this.http.get('//jsonplaceholder.typicode.com/users');
    // return this.http.get('//jsonplaceholder.typicode.com/users')
    //   .pipe(map((data: any) => {
    //     return data;
    //   }),
    //     catchError((error) => {    // handle error
         
    //       if (error.status == 404) {
    //         //Handle Response code here
    //       }
    //       return throwError(error);
    //     })
    //   );
  }

  // postCall(){
  //   const url = 'https://www.sample.com/pc/pc_graph/getDataPC/40/18';
  //   // You can send a body if needed (replace 'yourData' with actual data)
  //   const body = {}; // Adjust body as needed
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');  // Adjust headers as needed

  //   return this.http.post(url, body, { headers });
  // }

}
