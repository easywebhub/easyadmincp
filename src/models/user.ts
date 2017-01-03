export class Users {

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

export class User {
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
