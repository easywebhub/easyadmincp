import {
  inject,
  BindingEngine
} from 'aurelia-framework';
//import * as toastr from 'toastr';
import {
  UserServices
} from '../../services/Account/UserServices';
import * as _ from 'lodash';
import {
  DialogService
} from 'aurelia-dialog';

import {
  DetailUserDlg
} from '../../resources/ui/Dialog/DetailUserDlg';
import {
  User
} from '../../models//user';
@inject(UserServices, BindingEngine, DialogService)
export class UserMng {
  userServices: UserServices;
  listUsers: any;
  pageSize: number = 10
  total: number = 0
  current: number
  allPage: number
  bindingEngine: BindingEngine;
  pendding: boolean = true
  dialogService: DialogService
  constructor(userServices, bindingEngine, dialogService) {
    this.userServices = userServices;
    this.current = 1;
    this.total = 0
    this.dialogService = dialogService
  }

  activate() {
    this.pendding = !this.pendding;
    this.userServices.GetListByUsers().then(rs => {

      this.pendding = !this.pendding;
      this.listUsers = (rs as any).data;
      this.total = (rs as any).data.length;

      this.allPage = Math.ceil(this.total / this.pageSize)

    }).catch(err => {
      console.log('bad', err)
    })
  }

  DetailUser(item) {

    this.dialogService.open({
      viewModel: DetailUserDlg,
      model: item
    }).then((result) => {
      if (!result.wasCancelled) {
        console.log('result.output', result.output);




      } else {
        console.log('bad');
      }

    });


  }


}
export class SearchUserNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      console.log('test', obj.toLowerCase())
      let filteredArr = array.filter(x => x.UserName.toLowerCase().indexOf(obj.toLowerCase()) != -1);

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
      let filteredArr = array.filter(x => x.Info.Name.toLowerCase().indexOf(obj.toLowerCase()) != -1);

      return filteredArr;
    }
    return array;
  }
}
