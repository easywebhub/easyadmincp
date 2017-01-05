
import {
  ValidationRules
} from 'aurelia-validation';

export class User {

  AccountType: string;
  UserName: string;
  Password: string;
  Info: any;
  

  constructor(entity: any) {

    this.AccountType = entity.AccountType;
    this.UserName = entity.UserName;
    this.Password = entity.Password;
    this.Info = entity.Info;
  }
}

export class Info {
  AccountId:string
  Name: string
  Age: string
  Sex: string
  Address: string
 constructor(entity: any) {
    this.AccountId=entity.AccountId
    this.Name = entity.Info.Name;
    this.Age = entity.Info.Age;
    this.Sex = entity.Info.Sex;
    this.Address = entity.Info.Address;

  }
}
ValidationRules
  .ensure((a: Info) => a.Name).required()
  .on(Info);

ValidationRules
  .ensure((a: User) => a.AccountType).required()
  .ensure(a => a.UserName).required()
  .ensure('Name').required()
  .ensure(a => a.Password).required()
  .on(User);
