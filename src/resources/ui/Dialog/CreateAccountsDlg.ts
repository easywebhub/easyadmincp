import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
import * as $ from 'jquery'
@inject(DialogController)
export class CreateAccountsDlg {
  dialogController: DialogController;
  meta: any;
  
  constructor(dialogController) {
    this.dialogController = dialogController
    
    this.meta={}
  }

  submit() {
   

    
    //this.Web.Accounts = this.Account;
    console.log('meta',JSON.stringify(this.meta))
    this.dialogController.ok(this.meta);
  }
  attached() {
     
    var rules = {
      Name: {
        identifier: 'Name',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập Name'
        }]
      },
      PasswoDisplayName: {
        identifier: 'AccountType',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập AccountType'
        }]
      },
      Link: {
        identifier: 'UserName',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập UserName'
        }]
      }


    };
    ($(".ui.form") as any).form({fields:rules, 
      inline: true,
      on: 'blur'
    });
    
  }



}
