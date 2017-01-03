import { inject, transient } from 'aurelia-framework';
import { json } from 'aurelia-fetch-client';
import { HttpService } from '../..//services/HttpService';
@inject(HttpService)
//Create OBJ
@transient()
export class UserServices {
    http: any;
    constructor(httpService: HttpService) {
        this.http = httpService.instance;

    }
    
    GetListByUsers() {

    return new Promise((resolve, reject) => {
      this.http.get(`users`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  CreateByUsers(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`users`, meta, {
        responseType: 'json'
      }).then(data =>
        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  
   DetaiByUser(AccountId) {

    return new Promise((resolve, reject) => {
      this.http.get(`users/${AccountId}`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  UpdateByUser(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`users/${meta.AccountId}`, meta).then(data =>
        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }




    
}
