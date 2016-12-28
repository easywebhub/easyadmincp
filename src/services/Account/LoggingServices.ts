import { inject, transient } from 'aurelia-framework';
import { json } from 'aurelia-fetch-client';
import { HttpService } from '../..//services/HttpService';
@inject(HttpService)
//Create OBJ
@transient()
export class LoggingServices {
    http: any;
    constructor(httpService: HttpService) {
        this.http = httpService.httpInstance;

    }
    // GetListLogging() {
    //     return new Promise((resolve, reject) => {
    //         this.http.fetch(`api-user/getlistuser`, { method: 'get'}).then(response => response.json()).then(data => { resolve(data) }).catch(err => reject(Error(err)));
    //     })
    // }
    //http://api.easywebhub.com/api-user/Logon
  CheckLogin(meta) {
        return new Promise((resolve, reject) => {
            this.http.fetch(`auth/signin`, {
                method: 'post',
                body: json(meta)
            })
              
                .then(data => {
                    console.log('data',data)
                    resolve(data);
                })
                .catch(err => reject(Error(err)));

        });
    }
  SignUp(meta){
    return new Promise((resolve, reject) => {
            this.http.fetch(`auth/signup`, {
                method: 'post',
                body: json(meta),
            })
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(err => reject(Error(err)));

        });
  }

}