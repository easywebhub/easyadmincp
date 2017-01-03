import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';

import * as Lockr from 'lockr'
import * as $ from 'jquery'
@inject(DialogController)

export class CreateWebDlg {
  dialogController: DialogController;
  Web: any;
  
  constructor(dialogController) {
    this.dialogController = dialogController
     this.Web = {}
      this.Web.Accounts = [];
       this.Web.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;
     
      
  }

  submit() {
     console.log('web',this.Web.Accounts.WebsiteDisplayName,this.Web.Accounts.AccessLevels,this.Web.Accounts.AccountId)
    this.dialogController.ok(this.Web);
  }

  attached() {
  
    var rules = {
      Name: {
        identifier: 'Name',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập tên vào'
        }]
      },
      DisplayName: {
        identifier: 'DisplayName',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập DisplayName'
        }]
      },
      Url: {
        identifier: 'Url',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập Link'
        }]
      }
    };
($(".ui.form")as any).form({
    fields: rules,
     inline: true,
      on: 'blur'
})
  }


}
