import {
  lazy
} from 'aurelia-framework';

// polyfill fetch client conditionally

import axios from 'axios';
export class Users {
  heading: string = 'Github Users';
  //users: Array < IUser > = [];
  instance:any
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 100000      
    });
  }


  async activate(): Promise < void > {
    // ensure fetch is polyfilled before we create the http client

     return await this.instance.get('/users')
  .then(function (response) {
    console.log('respon',response);
  })
  .catch(function (error) {
    console.log(error);
  });

   
  }
}
