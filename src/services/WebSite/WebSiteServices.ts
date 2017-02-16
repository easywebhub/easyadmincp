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

 
  DetailWebSite(WebsiteId) {

    return new Promise((resolve, reject) => {
      this.http.get(`websites/${WebsiteId}`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(err)
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
CreateWebFull(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`websites/fulladd`, meta, {
       
      }).then(data =>
        resolve(data)
      ).catch(err => {
            
         if (err.response.status == 422) {
          //console.log(err)
          reject(err.response.data.Message)
        }
      })
    })
  } 
  UpdateWebFull(meta) {
    return new Promise((resolve, reject) => {
      this.http.patch(`websites/${meta.WebsiteId}/fullupdate`, meta
       
      ).then(data =>
        resolve(data)
      ).catch(err => {
         //console.log('@@@@@',err.Error)
        if (err.response.status == 422) {
         
           reject(err.response.data.Message)
        }
      })
    })
  } 






      }
