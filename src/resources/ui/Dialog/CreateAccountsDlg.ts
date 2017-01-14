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
 
   meta: User = new User();
  controller: any;
  /**
   *
   */
  constructor(dialogController, controllerFactory) {
  
    //  this.meta = new User();
     console.log('meta');
    this.dialogController = dialogController;
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  }
  // constructor(dialogController, controllerFactory) {
  //     this.meta = new User({});
  //    console.log('meta');
  //   this.dialogController = dialogController;
  //   this.controller = controllerFactory.createForCurrentScope();
  //   this.controller.addRenderer(new SemanticFormRenderer());
  
  // }

  submit() {
  
   this.controller.validate().then(rs => {
       if(rs.valid==true)

        {
           //this.meta.Info.Name=(this.meta as any).Name;
          //console.log('meta', JSON.stringify(this.meta))
           this.dialogController.ok(this.meta);
        }
        else
         console.log('error')

    });
   
  }



}
