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
            this.http.fetch(`account/all`, {
                method: 'get'
              
            })
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                })
                .catch(err => reject(Error(err)));

        });
    }
    
}
