import {
  ValidationRules
} from 'aurelia-validation';
export class Git
{
    
  AccountId:string
  RepositoryName:string
  constructor(entity)
   {
       this.AccountId=entity.AccountId
       this.RepositoryName=entity.RepositoryName
   }

}
ValidationRules
  .ensure((a: Git) => a.AccountId).required()
  .ensure(a => a.AccountId).required()
  .on(Git);