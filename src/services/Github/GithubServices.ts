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
export class GithubServices {
  http: any;
  constructor(httpService: HttpService) {
    this.http = httpService.instance;

  }




  GetListGithub() {

    return new Promise((resolve, reject) => {
      this.http.get(`api/GitHub`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  DetailGithub(userId) {

    return new Promise((resolve, reject) => {
      this.http.get(`sources/repositories/users/${userId}`, {
        responseType: 'json'
      }).then(data =>

        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
  CreateGithub(meta) {
    return new Promise((resolve, reject) => {
      this.http.post(`sources/repositories`, meta, {
        responseType: 'json'
      }).then(data =>
        resolve(data)
      ).catch(err => {
        console.log(err)
        reject(Error(err))
      })
    })
  }
}
