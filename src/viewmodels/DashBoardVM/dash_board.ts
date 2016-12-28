// import {OrderService} from '/src/services/ordersvc/orderservice';
import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { AppState } from '../../services/appState';
import * as axios from 'axios';
@inject(HttpClient, AppState)
export class Dashboard {
	appState : AppState;
	constructor(private http: HttpClient, appState: AppState ) {
		//this.orderService = orderService;
		this.appState = appState;
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('https://api.github.com/');
		});
	}
  activate() {

	  console.log('new');
 	  return axios.get('https://api.github.com/users')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


	}
	setLockr(){
		this.appState.setMyInFo();
	}
	
}