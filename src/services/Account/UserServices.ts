import {
  inject,
  transient
} from 'aurelia-framework';
import {
  json
} from 'aurelia-fetch-client';
import {
  HttpService
} from '../..//services/HttpService';
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
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }
  CreateByUsers(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`users`, meta).then(data =>
        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          //console.log(err)
          reject(err)
        }
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
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }
  UpdateByUser(meta) {
    return new Promise((resolve, reject) => {
      this.http.put(`users/${meta.AccountId}`, meta).then(data =>
        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }
  UserByCreateWebSite(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`users/${meta.AccountId}/websites`, meta, {
        responseType: 'json'
      }).then(data =>
        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          //console.log('err',JSON.stringify(err))
          reject(err)
        }
      })
    })
  }



  AllWebsiteOfUser(AccountId) {

    return new Promise((resolve, reject) => {
      this.http.get(`users/${AccountId}/websites`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }

  DeleteOneWebsiteOfUser(AccountId, WebsiteId) {

    return new Promise((resolve, reject) => {
      this.http.delete(`users/${AccountId}/websites/${WebsiteId}`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }
  UpdatePermisSionUserOnWebsite(meta) {
    return new Promise((resolve, reject) => {
      this.http.put(`users/${meta.AccountId}/websites/${meta.WebsiteId}`, meta).then(data =>
        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }
  CreatePermisSionUserOnWebsite(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`users/${meta.AccountId}/websites/${meta.WebsiteId}`, meta).then(data =>
        resolve(data)
      ).catch(err => {
        if (err.response.status == 422) {
          console.log(err)
          reject(err)
        }
      })
    })
  }


}
