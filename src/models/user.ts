export class User {
  
    AccountType : string;
    UserName : string;
    Password : string;
    Info:any;
     constructor(entity: any) {
     
        this.AccountType = entity.Name;
        this.UserName = entity.DisplayName;
        this.Password = entity.Url;
        this.Info = entity.Info;
       
    }
}
