import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  User,Users
} from '../../../models//user';
import * as $ from 'jquery'
@inject(DialogController)
export class UpdateAccountDlg {
  dialogController: DialogController;
  meta: any;
  
  constructor(dialogController) {
    this.dialogController = dialogController
    
    this.meta={}
  }
activate(params){
   
   this.meta=new User(params);
   console.log('params',this.meta)
}

 
  submit() {
   
    console.log('meta',JSON.stringify(this.meta))
    this.dialogController.ok(this.meta);
  }
  attached() {
     
    var rules = {
      Name: {
        identifier: 'Name',
        rules: [{
          type: 'empty',
          prompt: 'Xin vui lòng nhập tên vào'
        }]
      }
    };
    ($(".ui.form") as any).form({fields:rules,
      inline: true,
      on: 'blur'}
    );
    
  }



}
