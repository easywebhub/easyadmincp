import { AppState } from '../../services/appState';
import { json } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { inject, NewInstance } from 'aurelia-dependency-injection';
import { ValidationControllerFactory } from 'aurelia-validation';
// import * as AppConfig from '../../Configs/appConfig';
import { LoggingServices } from '../../services/Account/LoggingServices';
import { Login } from '../../models/login';
import { App } from '../../app';
import { BootstrapFormRenderer } from '../../resources/validation-render/bootstrap-render';
import Lockr = require('lockr');

@inject( AppState, Router, ValidationControllerFactory,LoggingServices,App)
export class LoginViewModel {
  appState: AppState;
  theRouter: Router;
  Login: Login = new Login();
  loggingServices: LoggingServices;
  checkLogin: any;
 app:App
 controller = null;
 config: any;
 router: any;
  constructor(appState: AppState, router: Router, controllerFact: ValidationControllerFactory,loggingServices,app) {
    {
      this.appState = appState;
      this.theRouter = router;
      this.loggingServices = loggingServices;
      this.controller = controllerFact.createForCurrentScope();
      this.controller.addRenderer(new BootstrapFormRenderer());
     
       Lockr.set('UserInfo', false);
    }
  }
  // activate() {
  //   return Promise.all([this.loggingServices.GetListLogging()]).then(rs => {
         
  //     this.checkLogin = (rs[0] as any).Data;
  //         console.log('getUser', (rs[0] as any).Data);
          

  //   });
  // }
  submit() {
    
    return Promise.all([this.loggingServices.CheckLogin(this.Login)]).then(rs => {
       
      if ((rs[0] as any).Result == true)
      {
        Lockr.set('UserInfo', (rs[0] as any).Result);
         window.setTimeout(() => {
        this.theRouter.navigateToRoute('Dashboard');
          location.reload();
        
    }, 1200);
          swal({ title: "Thông báo", text: "Đăng nhập thành công", timer: 2500, showConfirmButton: true,type: "success"});
      }  
      else
      {
        
      
         swal({ title: "Thông báo", text: "Đăng nhập thất bại", timer: 2500, showConfirmButton: true,type: "warning"});
      }
     
     })
    
   
        
   

    // todo: call server...
  }
  

}
