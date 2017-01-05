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
  Info
} from '../../../models/user';
import * as $ from 'jquery'
@inject(DialogController,ValidationControllerFactory)
export class UpdateAccountDlg {
  dialogController: DialogController;
  meta:Info;
  controller:any
  constructor(dialogController,controllerFactory) {
    this.dialogController = dialogController
      this.controller = controllerFactory.createForCurrentScope();
      this.controller.addRenderer(new SemanticFormRenderer());
    
  }
activate(params){
   
  this.meta=new Info(params)
   console.log('params',this.meta)
}

 
  submit() {
   
   //console.log('meta',JSON.stringify(this.meta))
     this.dialogController.ok(this.meta);
  }
 



}
