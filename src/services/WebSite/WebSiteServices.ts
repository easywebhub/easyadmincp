import {
  inject,
  transient
} from 'aurelia-framework';

import {
  HttpService
} from '../..//services/HttpService';
@inject(HttpService)
  //Create OBJ
@transient()
export class WebSiteServices {
  http: any;
  constructor(httpService: HttpService) {
      this.http = httpService.instance;

    }
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  GetListWebSite(): Promise < Array < any >> {
      return new Promise((resolve, reject) => {
        this.http.get(`websites`, {
          responseType: 'json'
        }).then(data => {
            console.log(data)
          resolve(data)
        }).catch(err => {
            console.log(err)
          reject(Error(err))
        })
      })
    }
    DetailWebSite(WebsiteId): Promise < Array < any >> {
      return new Promise((resolve, reject) => {
        this.http.get(`websites/${WebsiteId}`, {
          responseType: 'json'
        }).then(data => {
            console.log(data)
          resolve(data)
        }).catch(err => {
            console.log(err)
          reject(Error(err))
        })
      })
    }
      CreateWeb(meta){
      return new Promise((resolve, reject) => {
        this.http.post(`websites`, {
          responseType: 'json'
        }).then(data => {
            console.log(data)
          resolve(data)
        }).catch(err => {
            console.log(err)
          reject(Error(err))
        })
      })
    }
     
    
  //   RoleWeb(meta) {
  //     return new Promise((resolve, reject) => {
  //       this.http.fetch(`website/add-account`, {
  //           method: 'post',
  //           body: json(meta),
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //           resolve(data);
  //         })
  //         .catch(err => reject(Error(err)));

  //     });
  //   }


}
