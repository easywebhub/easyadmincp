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

//import Lockr from 'lockr'


@inject(Router, LoggingServices)
export class LoginViewModel {
  theRouter: Router;

  loggingServices: LoggingServices;
  router: any;
  Login: any;
  pendding: boolean = true
  constructor(router: Router, loggingServices) {
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
    ($(".ui.form") as any).form({
      fields: rules,
      inline: true,
      on: 'blur',
      onSuccess: this.submit
    });

  }
  routeRegister() {
    this.theRouter.navigateToRoute('register');
  }
  submit() {

    this.pendding = !this.pendding;
    this.loggingServices.CheckLogin(this.Login).then(rs => {
        //console.log('result',JSON.stringify((rs as any).data))
        if ((rs as any).status == 200) {
          this.pendding = !this.pendding;
         console.log('lockr',(rs as any).data);
         Lockr.set('UserInfo', (rs as any).data)
          window.setTimeout(() => {
            this.theRouter.navigateToRoute('WebSiteMenu');
            location.reload();

          }, 1200);
          // swal({
          //   title: "Thông báo",
          //   text: "Đăng nhập thành công",
          //   timer: 2500,
          //   showConfirmButton: true,
          //   type: "success"
          // });
        } else {
          console.log('bad');
        }

      }

    ).catch(err => {
      this.pendding = !this.pendding;
      // swal({
      //   title: "Thông báo",
      //   text: "Đăng nhập thất bại",
      //   timer: 2500,
      //   showConfirmButton: true,
      //   type: "warning"
      // });
    })

  }


}
