import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
@inject(DialogController)
export class CreateWebDlg {
  dialogController: DialogController;
  Web: any;
  Account: any;
  objAccessLevel:any
  constructor(dialogController) {
    this.dialogController = dialogController
     this.Web = []
     this.Web.Accounts = [];
      this.objAccessLevel = [];
    console.log('test', JSON.stringify(Lockr.get("UserInfo")))
  }

  submit() {
   

    this.Web.Accounts.AccountId = (Lockr.get("UserInfo") as any).AccountId;
    // this.Account.AccessLevel = [];
    //this.Web.Accounts = this.Account;
    this.Web.Accounts.AccessLevels=this.objAccessLevel
    console.log('dialog', this.Web);
    this.dialogController.ok(this.Web);
  }
  attached() {
      this.Web.Accounts = [];
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
      }


    };
    ($(".ui.form") as any).form(rules, {
      inline: true,
      on: 'blur'
    });
    ($('.dropdown') as any)
    .dropdown({

      onChange: function (value, text, $selectedItem) {
       
        this.objAccessLevel = value;

        console.log('value change', value);
      }
    });
  }



}
