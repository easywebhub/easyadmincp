import {
  DialogController
} from 'aurelia-dialog';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import {
  SemanticFormRenderer
} from '../../../resources/validation/semantic-form-renderer';
import {
  User
} from '../../../models/user';


@inject(DialogController, ValidationControllerFactory)
export class CreateAccountsDlg {
  dialogController: DialogController;
 
   meta: User;
  controller: any
  constructor(dialogController, controllerFactory) {
    this.dialogController = dialogController
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
    this.meta = new User({})
  }

  submit() {
  
   this.controller.validate().then(rs => {
       if(rs.valid==true)

        {
           this.meta.Info.Name=(this.meta as any).Name;
          console.log('meta', JSON.stringify(this.meta))
           this.dialogController.ok(this.meta);
        }
        else
         console.log('error')

    });
   
  }



}
