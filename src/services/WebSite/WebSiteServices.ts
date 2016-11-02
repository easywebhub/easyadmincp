import { inject, transient } from 'aurelia-framework';
import { json } from 'aurelia-fetch-client';
import { HttpService } from '../..//services/HttpService';
@inject(HttpService)
//Create OBJ
@transient()
export class WebSiteServices {
    http: any;
    constructor(httpService: HttpService) {
        this.http = httpService.httpInstance;

    }
    GetListWebSite() {
        return new Promise((resolve, reject) => {
            this.http.fetch(`api-user/getlistWebsite`, { method: 'get'}).then(response => response.json()).then(data => { resolve(data) }).catch(err => reject(Error(err)));
        })
    }
    CreateWeb(meta){
    return new Promise((resolve, reject) => {
            this.http.fetch(`website/addnew`, {
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
  RoleWeb(meta){
    return new Promise((resolve, reject) => {
            this.http.fetch(`website/add-account`, {
                method:'post',
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