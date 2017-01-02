import {
  DialogController
} from 'aurelia-dialog';

import {
  inject
} from 'aurelia-dependency-injection';

import * as Lockr from 'lockr'
@inject(DialogController)

export class CreateWebDlg {
  dialogController: DialogController;
  Web: any;
  Account: any;
  objAccessLevel:any
  access:any
  constructor(dialogController) {
    this.dialogController = dialogController
     this.Web = {}
     this.Web.Accounts = [];
      this.objAccessLevel = [];
   
  }

  submit() {
   

   this.Web.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;
   
    this.Web.Accounts = this.Account;
    //this.Web.Accounts.AccessLevels=[]
    //this.Web.Accounts.AccessLevels=this.access
     this.objAccessLevel=this.access
    console.log('web',this.Web,'access',this.access)
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
      PasswoDisplayName: {
        identifier: 'DisplayName',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập DisplayName'
        }]
      },
      Link: {
        identifier: 'Url',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập Link'
        }]
      },
      access:{
         identifier:'access',
          rules: [{
          type: 'number',
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
