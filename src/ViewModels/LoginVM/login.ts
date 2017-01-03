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

import * as Lockr from 'lockr'
import * as $ from 'jquery'
import * as swal  from 'sweetalert'

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



    }

  }
  activate() {
    Lockr.rm('UserInfo');
   
  }
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
  async submit() {

    this.pendding = !this.pendding;
    console.log('login', JSON.stringify(this.Login))
    await this.loggingServices.CheckLogin(this.Login).then(rs => {
        if ((rs as any).status == 200) {
          this.pendding = !this.pendding;
          Lockr.set('UserInfo', (rs as any).data)
          swal({
            title: "Thông báo",
            text: "Đăng nhập thành công",
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
        text: "Dăng nhập thất bại",
        timer: 2500,
        showConfirmButton: true,
        type: "warning"
      });

      return;
    })

  }


}
