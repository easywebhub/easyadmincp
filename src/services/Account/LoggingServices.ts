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
  
 CheckLogin(meta): Promise < Array < any >>{
      return new Promise((resolve, reject) => {
        this.http.post(`auth/signin`,meta).then(data => {
            console.log(data)
            resolve(data)
        }).catch(err => {
            console.log('test',err)
          reject(Error(err))
        })
      })
    }

  
  

}
