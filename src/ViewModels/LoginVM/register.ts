import {
  Router
} from 'aurelia-router';
import {
  inject
} from 'aurelia-dependency-injection';


import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../resources/validation/semantic-form-renderer';
import {
  User
} from '../../models/user';
import {
  UserServices
} from '../../services/Account/UserServices';
import * as Lockr from 'lockr'
import * as $ from 'jquery'
import * as swal from 'sweetalert'

@inject(Router, UserServices, ValidationControllerFactory)
export class Register {
  theRouter: Router;

  clsSv: UserServices;
 
  meta: User;
  pendding: boolean = true
  controller: any

  constructor(router, userServices, controllerFactory) {

    this.clsSv = userServices
    this.theRouter = router
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
     this.meta = new User({})
  }

  activate() {
   
  }
  routeRegister() {

    this.theRouter.navigateToRoute('register');

  }

  submit() {
     this.meta.Info.Name=(this.meta as any).Name;
     
    console.log('meta',JSON.stringify(new User(this.meta)))
    this.controller.validate().then(rs => {
       if(rs.valid==true)
        {
               
          this.createAccount();
        }
        else
         console.log('error')

    });
  }
  routeLogin() {

    this.theRouter.navigateToRoute('login');

  }
 async createAccount() {
    this.pendding = !this.pendding;
    console.log()
    await this.clsSv.CreateByUsers(new User(this.meta)).then(rs => {

        if ((rs as any).status == 200) {
          this.pendding = !this.pendding;
          
          Lockr.set('UserInfo', (rs as any).data)
          swal({
            title: "Thông báo",
            text: "Register success",
            timer: 2500,
            showConfirmButton: true,
            type: "success"
          });
          window.setTimeout(() => {
            this.theRouter.navigateToRoute('WebSiteMenu');
            location.reload();
          }, 1200);
          console.log('true')
          return
        }
      }

    ).catch(err => {

      this.pendding = !this.pendding;
      swal({
        title: "Thông báo",
        text: "Error Register",
        timer: 2500,
        showConfirmButton: true,
        type: "warning"
      });

      return;
    })
  }




}
