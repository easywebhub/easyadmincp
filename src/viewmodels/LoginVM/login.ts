import { AppState } from '../../services/appState';
import { json } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { inject} from 'aurelia-dependency-injection';
import { LoggingServices } from '../../services/Account/LoggingServices';
import Lockr = require('lockr');



@inject( Router,LoggingServices)
export class LoginViewModel {
  theRouter: Router;
  
  loggingServices: LoggingServices;
  router: any;
  Login: any; 
  pendding:boolean=true
  constructor(router: Router,loggingServices) {
    {
   
      this.theRouter = router;
      this.loggingServices = loggingServices;
    
     
       //Lockr.set('UserInfo', false);
    }
  }
  // activate() {
  //   return Promise.all([this.loggingServices.GetListLogging()]).then(rs => {
         
  //     this.checkLogin = (rs[0] as any).Data;
  //         console.log('getUser', (rs[0] as any).Data);
          

  //   });
  // }
  attached() {
        
    var rules = {
      UserName: {
        identifier: 'UserName',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập tên vào'
        }]
      },
      Password: {
        identifier: 'Password',
        rules: [{
          type: 'minLength[1]',
          prompt: 'Mật khẩu ít nhất {ruleValue} ký tự'
        }]
      },
      
    };
    ($(".ui.form") as any).form({fields:rules,
      inline: true,
      on: 'blur',
      onSuccess: this.submit
    });
 
  }
  routeRegister() {
         this.theRouter.navigateToRoute('register');
    }
  submit() {
    //console.log(this.submit());
    this.pendding=!this.pendding;
    this.loggingServices.CheckLogin(this.Login).then(rs => {
 // console.log('err',(rs as any).status);
    //console.log('test',(rs as any).status)
     
        this.pendding=!this.pendding;
        console.log('úe',(rs as any));
        Lockr.set('UserInfo',(rs as any));
        //console.log('object',this.Login);
         window.setTimeout(() => {
       this.theRouter.navigateToRoute('Dashboard');
       location.reload();
        
    }, 1200);
          swal({ title: "Thông báo", text: "Đăng nhập thành công", timer: 2500, showConfirmButton: true,type: "success"});
     
     }).catch(err=>{
        this.pendding=!this.pendding;
        swal({ title: "Thông báo", text: "Đăng nhập thất bại", timer: 2500, showConfirmButton: true,type: "warning"});
     })
    
   
        
   

    // todo: call server...
  }
  

}

