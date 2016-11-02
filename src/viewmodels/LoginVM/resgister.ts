import { AppState } from '../../services/appState';
import { json } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';
import { LoggingServices } from '../../services/Account/LoggingServices';
import Lockr = require('lockr');

@inject(Router, LoggingServices)
export class Register {
    theRouter: Router;

    loggingServices: LoggingServices;
    router: any;
    Login: any;
    varDate: any;
    varTo: any;
    constructor(router: Router, loggingServices) {
        {

            this.theRouter = router;
            this.loggingServices = loggingServices;
            
            this.varTo = new Date();
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
        console.log('date input',this.varDate);
    // ($("#example1") as any).calendar(
    //         {
    //             type: 'datetime',
    //             ampm: false,
               
    //             formatter: {
    //                 datetime: function (date, settings) {
    //                     //return a formatted string representing the date & time of 'date' 
    //                     if (!date) return '';
    //                     var day = date.getDate();
    //                     var month = date.getMonth() + 1;
    //                     var year = date.getFullYear();
    //                     var hh = date.getHours()
    //                     var mm = date.getMinutes()
    //                     if (hh <= 9 && hh >= 0) {
    //                         hh = '0' + hh
    //                     }
                        
    //                     hh = hh;
    //                     if (mm <= 9 && mm >= 0) {
    //                         mm = '0' + mm
    //                     }
    //                     mm = mm;
                       
    //                     var ss = date.getMilliseconds()
    //                     return day + '/' + month + '/' + year + ' ' + hh + ':' + mm;
    //                 }
    //             },
    //             onChange: (date, text) => {
    //                 console.log('data', date);
    //                 //console.log('vardate', this.VCalendar);
    //             }
    //         }
    //     );


    }

    //   submit() {

    //     return Promise.all([this.loggingServices.CheckLogin(this.Login)]).then(rs => {

    //       if ((rs[0] as any).Result == true)
    //       {
    //         Lockr.set('UserInfo', (rs[0] as any).Data);

    //          window.setTimeout(() => {
    //         this.theRouter.navigateToRoute('Dashboard');
    //           location.reload();

    //     }, 1200);
    //           swal({ title: "Thông báo", text: "Đăng nhập thành công", timer: 2500, showConfirmButton: true,type: "success"});
    //       }  
    //       else
    //       {


    //          swal({ title: "Thông báo", text: "Đăng nhập thất bại", timer: 2500, showConfirmButton: true,type: "warning"});
    //       }

    //      })





    // todo: call server...
    //}


}

