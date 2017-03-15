import {
  json
} from 'aurelia-fetch-client';
import {
  Router
} from 'aurelia-router';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  LoggingServices
} from '../../services/Account/LoggingServices';


import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../resources/validation/semantic-form-renderer';
import {
  Login
} from '../../models/login';

import * as Lockr from 'lockr'
import * as $ from 'jquery'
import * as swal from 'sweetalert'

@inject(Router, LoggingServices, ValidationControllerFactory)
export class LoginViewModel {
  theRouter: Router;

  loggingServices: LoggingServices;
 
  Login: Login;
  pendding: boolean = true
  controller: any
  nIntervId:any;
  constructor(router, loggingServices, controllerFactory) {

    this.loggingServices = loggingServices
    this.theRouter = router
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.Login = new Login({})
    if (Lockr.get('UserInfo') != null) {
            //this.theRouter.navigate("Dashboard");
            // location.reload();
            this.theRouter.navigateToRoute('login');
            Lockr.rm('UserInfo');
            location.reload();
            

            return;
        }
   
  }

    

  routeRegister() {

    this.theRouter.navigateToRoute('register');

  }

  submit() {
    this.controller.validate().then(rs => {
       if(rs.valid==true)
        {
               
          this.login();
        }
        else
         console.log('error')

    });
  }
  async login() {
    this.pendding = !this.pendding;

    await this.loggingServices.CheckLogin(this.Login).then(rs => {

        if ((rs as any).status == 200) {
          this.pendding = !this.pendding;
          Lockr.set('UserInfo', (rs as any).data)
          swal({
            title: "Notification",
            text: "Login success",
            timer: 2500,
            showConfirmButton: true,
            type: "success"
          });
          window.setTimeout(() => {
             location.href='#/websites';
            location.reload();
          }, 2000);
          console.log('true')
          return
        }
      }

    ).catch(err => {

      this.pendding = !this.pendding;
      swal({
        title: "Notification",
        text: "Login fail",
        timer: 2500,
        showConfirmButton: true,
        type: "warning"
      });

      return;
    })
  }




}
