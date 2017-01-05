import {
  ValidationRules
} from 'aurelia-validation';
export class Login {

    UserName : string;
    Password : string;
   // Remember : boolean;
   constructor(entity)
    {
        this.UserName=entity.UserName;
        this.Password=entity.Password
    }
}

ValidationRules
  .ensure( (a: Login) => a.UserName).required()
  .ensure(a => a.Password).required()
  .on(Login);
