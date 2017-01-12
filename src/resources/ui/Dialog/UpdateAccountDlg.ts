import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory

} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';
import {
Info,User
} from '../../../models/user';
import * as $ from 'jquery'
@inject(DialogController,ValidationControllerFactory)
export class UpdateAccountDlg {
  dialogController: DialogController;
  meta:Info;
  user:User;
  controller:any
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.addRenderer(new SemanticFormRenderer());
    
  }
activate(params){
   
  this.meta=new Info(params)
  this.user=new User(params)
   console.log('params',this.meta)
}

 
  submit() {
   this.controller.validate().then(rs => {
       if(rs.valid==true)

        {
         
          this.user.Info=this.meta;
         
         (this.meta as any).AccountId=this.user.AccountId
         // console.log('meta', JSON.stringify(this.meta))
           this.dialogController.ok(this.meta);
        }
        else
         console.log('error')

    });
  }
 



}
