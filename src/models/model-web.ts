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
    Accounts:Array<Accounts>;
    Production:Array<Production>;
    Stagging:Array<Stagging>;
   
     constructor(entity: any) {
        this.WebsiteId = entity.WebsiteId || 0;
        this.Name = entity.Name;
        this.DisplayName = entity.DisplayName;
        this.Url = entity.Url;
        this.WebTemplateId=entity.WebTemplateId;
        this.Source=entity.Source;
        this.Git=entity.Git;
        this.WebsiteType=entity.WebsiteType;
        this.Accounts=entity.Accounts||[]  
        this.Stagging=entity.Stagging||[];
        this.Production=entity.Production||[];
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
  ValidationRules.customRule(
    'WebsiteType',
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
 ValidationRules.customRule(
    'HostingFee',
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
  .ensure((a: ModelWeb) => a.Name).required()
  .ensure(a=>a.Url).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .ensure(a=>a.WebsiteType).required().satisfiesRule('WebsiteType')
  .ensure(a=>a.Git).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .ensure(a=>a.Source).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .on(ModelWeb);
  ValidationRules
  .ensure((a: Production) => a.Name).required()
  .ensure(a=>a.Url).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .ensure(a=>a.HostingFee).required().satisfiesRule('HostingFee')
  .ensure(a=>a.Git).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .on(Production);
  ValidationRules
  .ensure((a: Stagging) => a.Name).required()
  .ensure(a=>a.Url).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .ensure(a=>a.HostingFee).required().satisfiesRule('HostingFee')
  .ensure(a=>a.Git).matches(/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).required()
  .on(Stagging);
    ValidationRules
  .ensure((a: Accounts) => a.AccessLevels).required()
  .on(Accounts);
                         