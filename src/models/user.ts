export class Users {

  AccountType: string;
  UserName: string;
  Password: string;
  Info: any;
  constructor(entity: any) {

    this.AccountType = entity.Name;
    this.UserName = entity.DisplayName;
    this.Password = entity.Url;
    this.Info = entity.User;

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
    this.Name = entity.Name;
    this.Age = entity.Age;
    this.Sex = entity.Sex;
    this.Address = entity.Address;

  }
}
