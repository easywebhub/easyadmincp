
import { Router } from 'aurelia-router';
import { inject, NewInstance } from 'aurelia-dependency-injection';
import { LoggingServices } from '../../services/Account/LoggingServices';
@inject(Router,LoggingServices)
export class LoginViewModel {

  theRouter: Router;
  loggingServices: LoggingServices;
  SignUp:any
  constructor(router,loggingServices) {
    
    
      this.theRouter = router;
      this.loggingServices = loggingServices;
      
  }
 
  routerToSignup(){
      this.theRouter.navigateToRoute("signup");
  }
  submit() {
      this.SignUp.status="verified";
      this.SignUp.accountType="user";
    console.log('signup',this.SignUp);
    return Promise.all([this.loggingServices.SignUp(this.SignUp)]).then(rs => {
       
      if ((rs[0] as any).Result == true)
      {
     
      
        this.theRouter.navigateToRoute('login');
        
        
    
          swal({ title: "Thông báo", text: (rs[0] as any).Message, timer: 2500, showConfirmButton: true,type: "success"});
      }  
      else
      {
        
      
         swal({ title: "Thông báo", text: (rs[0] as any).Message, timer: 2500, showConfirmButton: true,type: "warning"});
      }
     
     })
 
  }
  

}
