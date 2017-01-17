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
User,UpdateUser
} from '../../../models/user';
import * as $ from 'jquery'
@inject(DialogController,ValidationControllerFactory)
export class UpdateAccountDlg {
  dialogController: DialogController;
  meta:UpdateUser;
  controller:any
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.addRenderer(new SemanticFormRenderer());
    
  }
activate(params){
  //console.log('params',JSON.stringify(params))
  this.meta=new UpdateUser(params)
 
  // console.log('meta',JSON.stringify(this.meta))
}

 
  submit() {
   this.controller.validate().then(rs => {
       if(rs.valid==true)

        {
         
         
          //console.log('meta', JSON.stringify(this.meta))
          this.dialogController.ok(this.meta);
        }
        else
         console.log('error')

    });
  }
 



}
