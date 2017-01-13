import {
  ValidationRules
} from 'aurelia-validation';
export class WebSite {
    WebsiteId:string
    Name : string;
    DisplayName : string;
    Url : string;
    Accounts:any
    WebTemplateId:string;
     constructor(entity: any) {
        this.WebsiteId = entity.WebsiteId;
        this.Name = entity.Name || '';
        this.DisplayName = entity.DisplayName;
        this.Url = entity.Url;
        this.Accounts=entity.Accounts
        this.WebTemplateId=entity.WebTemplateId
       
    }
}

export class Accounts {

    AccountId  : string;
    WebsiteId : string;
   

    AccessLevels:any;

     constructor(entity: any) {
        this.AccountId = entity.AccountId;
        this.AccessLevels = [entity.AccessLevels];
    }
}
ValidationRules
  
  .ensure((a:Accounts)=>a.AccessLevels).required()
  .on(Accounts);

ValidationRules
  .ensure( (a: WebSite) => a.DisplayName).required()
  .ensure(a=>a.Url).required()
  .ensure('WebsiteDisplayName').required()
  .on(WebSite);