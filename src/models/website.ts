export class CreateWeb {

    Name : string;
    DisplayName : string;
    Url : string;
    Accounts:any;
     constructor(entity: any) {
      
        this.Name = entity.Name;
        this.DisplayName = entity.DisplayName;
        this.Url = entity.Url;
        this.Accounts = entity.Accounts;
       
    }
}
export class CreateRoleWeb {

    AccountId  : string;
    WebsiteId : string;
    WebsiteDisplayName : string;
    AccessLevel:any;
     constructor(entity: any) {
      
        this.AccountId = entity.AccountId;
        this.WebsiteId = entity.WebsiteId;
        this.WebsiteDisplayName = entity.WebsiteDisplayName;
        this.AccessLevel = entity.AccessLevel;
       
    }
}
