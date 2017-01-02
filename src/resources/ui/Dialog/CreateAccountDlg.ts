import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';

@inject(DialogController)
export class CreateAccountDlg {
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
  // attached() {
     
  //   var rules = {
  //     Name: {
  //       identifier: 'Name',
  //       rules: [{
  //         type: 'empty',
  //         prompt: 'Xin vui lòng nhập tên vào'
  //       }]
  //     },
  //     PasswoDisplayName: {
  //       identifier: 'DisplayName',
  //       rules: [{
  //         type: 'empty',
  //         prompt: 'Xin vui lòng nhập DisplayName'
  //       }]
  //     },
  //     Link: {
  //       identifier: 'Url',
  //       rules: [{
  //         type: 'empty',
  //         prompt: 'Xin vui lòng nhập Link'
  //       }]
  //     }


  //   };
  //   ($(".ui.form") as any).form(rules, {
  //     inline: true,
  //     on: 'blur'
  //   });
  //   ($('.dropdown') as any)
  //   .dropdown({

  //     onChange: function (value, text, $selectedItem) {
       
  //       this.objAccessLevel = value;

  //       console.log('value change', value);
  //     }
  //   });
  // }



}
