import {
  ValidationRules
} from 'aurelia-validation';

export class User {
  AccountId: string
  AccountType: string;
  UserName: string;
  Password: string;
  Info: any;
  constructor(entity: any) {
    this.AccountId = entity.AccountId
    this.AccountType = entity.AccountType;
    this.UserName = entity.UserName;
    this.Password = entity.Password;
    this.Info = entity.Info;
  }
}

export class Info {

  Name: string
  Age: string
  Sex: string
  Address: string
  constructor(entity: any) {
    this.Name = entity.Info.Name;
    this.Age = entity.Info.Age;
    this.Sex = entity.Info.Sex;
    this.Address = entity.Info.Address;

  }
}
export class Web {
  AccountId: string
  Name: string
  DisplayName: string
  Url: string
  WebTemplateId: string
  constructor(entity: any) {
    this.AccountId = entity.AccountId
    this.Name = entity.Name;
    this.DisplayName = entity.DisplayName
    this.Url = entity.Url
    this.WebTemplateId = entity.WebTemplateId

  }
}
ValidationRules
  .ensure((a: Web) => a.DisplayName).required()
  .ensure('Url').required()
  .ensure(a => a.WebTemplateId).required()
  .on(Web);
ValidationRules
  .ensure((a: Info) => a.Name).required()
  .on(Info);

ValidationRules
  .ensure((a: User) => a.AccountType).required()
  .ensure(a => a.UserName).required()
  .ensure('Name').required()
  .ensure(a => a.Password).required()
  .on(User);
