// import {
//   inject,
//   BindingEngine
// } from 'aurelia-framework';
// //import * as toastr from 'toastr';
// import {
//   UserServices
// } from '../../services/Account/UserServices';
// import * as _ from 'lodash';
// import {
//   DialogService
// } from 'aurelia-dialog';

// import {
//   DetailUserDlg
// } from '../../resources/ui/Dialog/DetailUserDlg';
// import {
//   UpdateAccountDlg
// } from '../../resources/ui/Dialog/UpdateAccountDlg';
// import {
//   CreateAccountsDlg
// } from '../../resources/ui/Dialog/CreateAccountsDlg';
// import {ListViewModel} from '../../models//list-view-model';
// import {
//   User
// } from '../../models//user';
// import {
//   UserCreateWebDlg
// } from '../../resources/ui/Dialog/UserCreateWebDlg';
// import * as swal from 'sweetalert'
// import {RouterConfiguration, Router} from 'aurelia-router';
// @inject(UserServices, BindingEngine, DialogService,Router)
// export class AccountList {
//   userServices: UserServices;
//   listUsers: any;
//   pageSize: number = 10
//   total: number = 0
//   current: number
//   allPage: number
//   bindingEngine: BindingEngine;
 
//   dialogService: DialogService
//   theRouter:Router
//   constructor(userServices, bindingEngine, dialogService,router) {
//     this.userServices = userServices;
//     this.current = 1;
//     this.total = 0
//     this.dialogService = dialogService
//     this.theRouter=router
//   }

//   async activate() {
  
//     await this.userServices.GetListByUsers().then(rs => {

     
//       this.listUsers = (rs as any).data;
//       this.total = (rs as any).data.length;

//       this.allPage = Math.ceil(this.total / this.pageSize)

//     }).catch(err => {
//       console.log('bad', err)
//     })
//   }

//   CreateAccount() {
//     this.dialogService.open({
//       viewModel: CreateAccountsDlg
//     }).then(result => {
//       if (!result.wasCancelled) {
//         this.userServices.CreateByUsers(result.output).then((rs: any) => {

//           swal({
//             title: "Notification",
//             text: "Create success",
//             timer: 2500,
//             showConfirmButton: true,
//             type: "success"
//           });

//           this.activate();

//         }).catch(err => {
         
//           swal({
//             title: "Notification",
//             text:   err.response.data.Message,
//             timer: 2500,
//             showConfirmButton: true,
//             type: "warning"
//           });

//         })

//       } else {
//         console.log('bad');
//       }

//     });


//   }
//  userCreateWebsite(item){
//    this.dialogService.open({
//       viewModel: UserCreateWebDlg,
//       model:item
//     }).then(result => {
//       if (!result.wasCancelled) {
//         console.log('meta',JSON.stringify(result.output))
//         this.userServices.UserByCreateWebSite(result.output).then((rs: any) => {
//           swal({
//             title: "Notification",
//             text: "User Create success",
//             timer: 2500,
//             showConfirmButton: true,
//             type: "success"
//           });

//           this.activate();

//         }).catch(err => {
         
//           swal({
//             title: "Notification",
//             text:   err.response.data.Message,
//             timer: 2500,
//             showConfirmButton: true,
//             type: "warning"
//           });

//         })

//       } else {
//         console.log('bad');
//       }

//     });

//  }

//   UpdateAccount(item: User) {
//     this.dialogService.open({
//       viewModel: UpdateAccountDlg,
//       model: item
//     }).then((result) => {
//       if (!result.wasCancelled) {

//         this.userServices.UpdateByUser(result.output).then((rs: any) => {

//           swal({
//             title: "Notification",
//             text: "Update Account Success",
//             timer: 2500,
//             showConfirmButton: true,
//             type: "success"
//           });

//           this.activate();

//         }).catch(err => {

//           swal({
//             title: "Notification",
//             text: "Update Account fail",
//             timer: 2500,
//             showConfirmButton: true,
//             type: "warning"
//           });

//         })

//       } else {
//         console.log('bad');
//       }

//     });


//   }

//  websitesOfAccount(item) {
   
//      this.theRouter.navigateToRoute('WebsOfAccount',{AccountId:item.AccountId});
 
  
//   }

//   DetailAccount(item) {

//     this.dialogService.open({
//       viewModel: DetailUserDlg,
//       model: item
//     }).then((result) => {
//       if (!result.wasCancelled) {
//         console.log('result.output', result.output);

//       } else {
//         console.log('bad');
//       }

//     });


//   }
 


// }


import {ListViewModel} from '../../models//list-view-model';
import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';
import {OrderService} from './order-service';

@inject(AppRouter, OrderService)
export class AccountList extends ListViewModel {
  constructor(router, service) {
    super('accounts', router, service)
  }
}
export class SearchUserNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.UserName && x.UserName.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Info.Name && x.Info.Name.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchAccountTypeValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.AccountType && x.AccountType.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchAddressValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Info.Address && x.Info.Address.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}