import {inject} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import {SemanticFormRenderer} from './semantic-form-renderer';

@inject(ValidationControllerFactory)
export class RegistrationForm {
  firstName = '';
  lastName = '';
  email = '';
  controller ;
  
  constructor(controllerFactory) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new SemanticFormRenderer());
  }
  
  submit() {
    this.controller.validate();
  }
}

ValidationRules
  .ensure( (a: RegistrationForm) => a.firstName).required()
  .ensure(a => a.lastName).required()
  .ensure(a => a.email).required().email()
  .on(RegistrationForm);
