
import {EntityViewModel} from '../../models//entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {AccountService} from './account-service';
import {
  User
} from '../../models/user';

@inject(AccountService)
export class Account extends EntityViewModel {
 entity:User
  constructor(service) {
    super(service);
    this.entity=new User(this.entity)
   
 }
  // activate(){
  //   console.log('entity @@@',JSON.stringify(this.entity))
  //   this.entity=new User(this.entity)
  // }
  get title() {
    if (this.entity.AccountId) {
      return `Account #${this.entity.AccountId}`;
     
    }
    else
      return 'NEW ACCOUNT';
    
  }
 
}