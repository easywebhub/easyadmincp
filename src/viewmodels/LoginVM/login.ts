
import { Router } from 'aurelia-router';
import { inject, NewInstance } from 'aurelia-dependency-injection';
import { LoggingServices } from '../../services/Account/LoggingServices';
import Lockr = require('lockr');
@inject(Router,LoggingServices)
export class LoginViewModel {

  theRouter: Router;
  loggingServices: LoggingServices;
  Login:any
  constructor(router,loggingServices) {
    
    
      this.theRouter = router;
      this.loggingServices = loggingServices;
      
  }
 
  routerToSignup(){
      this.theRouter.navigateToRoute("signup");
  }
  submit() {
    
    return Promise.all([this.loggingServices.CheckLogin(this.Login)]).then(rs => {
       
      if ((rs[0] as any).Result == true)
      {
        Lockr.set('UserInfo', (rs[0] as any));
         window.setTimeout(() => {
        this.theRouter.navigateToRoute('Dashboard');
          location.reload();
        
    }, 1200);
          swal({ title: "Thông báo", text: (rs[0] as any).Message, timer: 2500, showConfirmButton: true,type: "success"});
      }  
      else
      {
        
      
         swal({ title: "Thông báo", text: (rs[0] as any).Message, timer: 2500, showConfirmButton: true,type: "warning"});
      }
     
     })
 
  }
  

}
