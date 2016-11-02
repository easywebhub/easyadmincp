
import { Router } from 'aurelia-router';
import { inject, NewInstance } from 'aurelia-dependency-injection';
import { LoggingServices } from '../../services/Account/LoggingServices';
@inject(Router,LoggingServices)
export class Resgister {

  theRouter: Router;
  loggingServices: LoggingServices;
  SignUp:any
  constructor(router,loggingServices) {
    
    
      this.theRouter = router;
      this.loggingServices = loggingServices;
      
  }
 
//   routerToSignup(){
//       this.theRouter.navigateToRoute("signup");
//   }
attached() {
         
    var rules = {
    username: {
        identifier: 'username',
        rules: [{
            type: 'empty',
            prompt: 'Xin vui lòng nhập tài khoản'
        }]
      },
      password: {
        identifier: 'password',
        rules: [{
            type   : 'minLength[6]',
            prompt : 'Mật khẩu ít nhất {ruleValue} ký tự'
        }]
    },
      name: {
        identifier: 'name',
        rules: [{
            type: 'empty',
            prompt: 'Xin vui lòng nhập tên'
        }]
      },
      age: {
        identifier: 'age',
        rules: [{
            type   : 'empty',
            prompt : 'Xin vui lòng nhập tuổi'
        }]
    },
      address:{
        identifier: 'address',
        rules: [{
            type   : 'empty',
            prompt : 'Xin vui lòng nhập địa chỉ'
        }]
    }
      
};
($(".ui.form")as any).form(rules, {
    inline: true,
    on: 'blur'
});

   

    
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