import {
  inject,
  transient
} from 'aurelia-framework';

import {
  HttpService
} from '../..//services/HttpService';
@inject(HttpService)

@transient()
export class LoggingServices {
  http: any;
  constructor(httpService: HttpService) {
      this.http = httpService.instance;

    }
  
  CheckLogin(meta){
      return new Promise((resolve, reject) => {
        this.http.post(`auth/signin`,meta).then(data => 
            resolve(data)
        ).catch(err => {
            
          reject(Error(err))
        })
      })
    }

  
  

}
