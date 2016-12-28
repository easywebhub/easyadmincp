import { inject, transient } from 'aurelia-framework';
import { json } from 'aurelia-fetch-client';
import { HttpService } from '../..//services/HttpService';
@inject(HttpService)
//Create OBJ
@transient()
export class UserServices {
    http: any;
    constructor(httpService: HttpService) {
        this.http = httpService.httpInstance;

    }
    
    GetListUser() {
        return new Promise((resolve, reject) => {
            this.http.fetch(`users`, {
                method: 'get'
              
            })
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(err => reject(Error(err)));

        });
    }
     CreateUser(meta){
    return new Promise((resolve, reject) => {
            this.http.fetch(`users`, {
                method: 'post',
                body: json(meta)
            }).then(data => {
                    resolve(data);
                })
                .catch(err => reject(Error(err)));

        });
    }
    
    
}
