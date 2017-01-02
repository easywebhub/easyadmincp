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

POSTRequest(url, data){
  return new Promise((resolve, reject) => {
        this.http.post(url, {
          responseType: 'json'
        }).then(data => {
          console.log(data);
          if(data.status==200){
            resolve(data.content);  
          }else{
            reject(data._ew_status);
          }
        }).catch(err => {
            console.log(err)
          reject(Error(err))
        })
      })
}

GetRequest(url){
  return new Promise((resolve, reject) => {
        this.http.get(url, {
          responseType: 'json'
        }).then(data => {
          console.log(data);
          if(data.status==200){
            resolve(data.data);  
          }else{
            reject(data._ew_status);
          }
        }).catch(err => {
            console.log(err)
          reject(Error(err))
        })
      })
}

  GetListWebSite(){
      
       return new Promise((resolve, reject) => {
        this.http.get(`websites`, {
          responseType: 'json'
        }).then(data => 
          
            resolve(data)  
                  ).catch(err => {
            console.log(err)
          reject(Error(err))
        })
      })
    }
    DetailWebSite(WebsiteId): Promise < Array < any >> {
      return this.GetRequest(`websites/${WebsiteId}`);
    }
    CreateWeb(meta){
      return new Promise((resolve, reject) => {
        this.http.post(`websites`,meta, {
          responseType: 'json'
        }).then(data => 
         
         
            resolve(data)
       
           
         
        ).catch(err => {
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
