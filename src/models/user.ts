import {
  ValidationRules
} from 'aurelia-validation';

export class User {
  AccountId: string;
  AccountType: string;
  UserName: string;
  Password: string;
  Info: Info = new Info();
  Websites:ModelWeb[]=[]
  constructor(entity?: any) {
    if (entity) {
      this.AccountId = entity.AccountId ||0;
      this.AccountType = entity.AccountType;
      this.UserName = entity.UserName;
      this.Password = entity.Password;
      this.Info = entity.Info;
      this.Websites=entity.Websites;
    }

  }
}

export class Info {
  
  Name: string
  Age: string
  Sex: string
  Address: string
  constructor(entity?: any) {
    if (entity) {
    
      this.Name = entity.Name;
      this.Age = entity.Age;
      this.Sex = entity.Sex;
      this.Address = entity.Address;
    }
  }
}

export class UpdateUser{
  AccountId: string;
  Name: string;
  Age: string;
  Sex: string;
  Address: string;
   constructor(entity?: any) {
    if (entity) {
     this.AccountId=entity.AccountId;
      this.Name = entity.Info.Name;
      this.Age = entity.Info.Age;
      this.Sex = entity.Info.Sex;
      this.Address = entity.Info.Address;
    }
   }

}

export class Web {
  AccountId: string;
  Name: string;
  DisplayName: string
  Url: string
  WebTemplateId: string
  constructor(entity?: any) {
    if (entity) {
      this.AccountId = entity.AccountId
      this.Name = entity.Name;
      this.DisplayName = entity.DisplayName
      this.Url = entity.Url
      this.WebTemplateId = entity.WebTemplateId
    }


  }
}
export class ModelWeb {
  WebsiteId:string;
 // AccountId: string;
  Name: string;
  DisplayName: string;
  Url: string;
  WebTemplateId: string;
  AccessLevels:any;
  Source: string;
  WebsiteType: string;
  Git: string;
  constructor(entity?: any) {
    if (entity) {
    //  this.AccountId = entity.AccountId;
      this.WebsiteId = entity.WebsiteId || 0
      this.Name = entity.Name;
      this.DisplayName = entity.DisplayName;
      this.Url = entity.Url;
      this.WebTemplateId = entity.WebTemplateId;
      this.AccessLevels = entity.AccessLevels;
      this.Source = entity.Source
      this.WebsiteType = entity.WebsiteType;
      this.Git = entity.Git;
    }


  }
}

ValidationRules.customRule(
    'AccessLevels',
    (value, obj, otherPropertyName) => {
       console.log('value',value)
        if (value !== null || value !== undefined ||
        value !== "") {

            return true;
    } 
    else {
        return false;
    }}
    ,
    '${$displayName} không hợp lệ',
    otherPropertyName => ({ otherPropertyName })
);
ValidationRules
  .ensure((a: ModelWeb) => a.AccessLevels).required().satisfiesRule('AccessLevels').ensure(a => a.Name).required()
  .on(ModelWeb);

ValidationRules
  .ensure((a: UpdateUser) => a.Name).required()
  .on(UpdateUser);
ValidationRules
  .ensure((a: Web) => a.DisplayName).required()
  .ensure(a=>a.Url).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .ensure(a => a.WebTemplateId).required()
  .on(Web);
ValidationRules
  .ensure((a: Info) => a.Name).required()
  .on(Info);

// ValidationRules
//  // .ensure((a: User) => a.AccountType).required()
//   .ensure((a:User) => a.UserName).required()
//  //.ensure("Name").required()
//  // .ensure(a => a.Password).required()
//   .on(User);
