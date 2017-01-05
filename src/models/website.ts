import {
  ValidationRules
} from 'aurelia-validation';
export class WebSite {

    Name : string;
    DisplayName : string;
    Url : string;
    Accounts:any=[];
     constructor(entity: any) {
      
        this.Name = entity.Name || '';
        this.DisplayName = entity.DisplayName;
        this.Url = entity.Url;
        this.Accounts=entity.Accounts || []
       
    }
}
export class Accounts {

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

ValidationRules
  .ensure( (a: WebSite) => a.DisplayName).required()
  .ensure(a=>a.Url).required()
  .ensure('WebsiteDisplayName').required()
  .on(WebSite);