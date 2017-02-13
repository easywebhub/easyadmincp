import {
  ValidationRules
} from 'aurelia-validation';

export class ModelWeb {
    WebsiteId:string
    Name : string;
    DisplayName : string;
    Url : string;
    Source:string;
    WebsiteType:string;
    Git:string;
     WebTemplateId:string;
    Accounts:any;
    Productions:any;
    Staggings:any;
   
     constructor(entity: any) {
        this.WebsiteId = entity.WebsiteId || 0;
        this.Name = entity.Name;
        this.DisplayName = entity.DisplayName;
        this.Url = entity.Url;
        this.WebTemplateId=entity.WebTemplateId;
        this.Source=entity.Source;
        this.Git=entity.Git;
        this.WebsiteType=entity.WebsiteType;
        this.Accounts=entity.Accounts  
        this.Staggings=entity.Staggings;
        this.Productions=entity.Productions;
    }
}
export class Accounts {
      AccountId:string;
      AccessLevels:any
      constructor(entity:any){
        this.AccountId=entity.AccountId || 0;
        this.AccessLevels=entity.AccessLevels
      }
}
export class Stagging{
    Id:string;
    Name:string;
    HostingFee:string;
    Url:string;
    Git:string;
    IsDefault:boolean
    constructor(entity: any) {
        this.Id = entity.Id || 0;
        this.Name = entity.Name;
        this.HostingFee = entity.HostingFee;
        this.Url = entity.Url;
         this.Git=entity.Git
         this.IsDefault=entity.IsDefault || false       
    }

  }
 export class Production{
    Id:string;
    Name:string;
    HostingFee:string;
    Url:string;
    Git:string;
    IsDefault:boolean
    constructor(entity: any) {
        this.Id = entity.Id || 0;
        this.Name = entity.Name;
        this.HostingFee = entity.HostingFee;
        this.Url = entity.Url;
         this.Git=entity.Git
         this.IsDefault=entity.IsDefault || false       
    }
  } 
                         