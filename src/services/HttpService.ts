
import {ApiUrlBase } from '../configs/appConfig';
import axios from 'axios';
export class HttpService {
  instance:any
  constructor() {
    this.instance = axios.create({
      baseURL: ApiUrlBase,
      timeout: 600000     
    });
    
  }
 
}
