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
  GetListWebSite() {

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

  DetailWebSiteUsers(WebsiteId) {

    return new Promise((resolve, reject) => {
      this.http.get(`websites/${WebsiteId}/users`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  DetailWebSite(WebsiteId) {

    return new Promise((resolve, reject) => {
      this.http.get(`websites/${WebsiteId}`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  CreateWeb(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`websites`, meta, {
        responseType: 'json'
      }).then(data =>
        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  ConfirmWebSite(WebsiteId) {

      return new Promise((resolve, reject) => {
          this.http.get(`/websites/${WebsiteId}/confirm`, {
            responseType: 'json'
          }).then(data =>

            resolve(data)
          ).catch(err => {
           if(err.response.status==422){
       //console.log('err',JSON.stringify(err))
            reject(err)
           }
      })
    })
  }





      }
