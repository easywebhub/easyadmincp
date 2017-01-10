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
        this.Accounts=entity.Accounts
       
    }
}
export class Accounts {

    AccountId  : string;
    WebsiteId : string;
    WebsiteDisplayName : string;

    AccessLevels:Array<any>;

     constructor(entity: any) {
      
        this.AccountId = entity.AccountId;
        this.WebsiteId = entity.WebsiteId;
        this.WebsiteDisplayName = entity.WebsiteDisplayName;

        this.AccessLevels = [entity.AccessLevels];

       
    }
}
ValidationRules
  .ensure( (a: Accounts) => a.WebsiteDisplayName).required()
  .ensure(a=>a.AccessLevels).required()
  .on(Accounts);

ValidationRules
  .ensure( (a: WebSite) => a.DisplayName).required()
  .ensure(a=>a.Url).required()
  .ensure('WebsiteDisplayName').required()
  .on(WebSite);