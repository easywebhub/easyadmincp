
import {EntityViewModel} from '../../models//entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {AccountService} from './account-service';
import {
  User
} from '../../models/user';
import {
  AccountType,AccountStatus
} from '../../resources/helpers/enum';
import * as _ from 'lodash'

@inject(AccountService)
export class Account extends EntityViewModel {
 entity:User;
 accountStatus=AccountStatus;
 accountType=AccountType; 
  item:any;
  constructor(service) {
    super(service);
    this.entity=new User(this.entity);
    this.item=this.entity;
    //console.log('1',JSON.stringify(this.item),'2',JSON.stringify(this.entity))
   
 }

  get title() {
    if (this.entity.AccountId) {
      return `Account #${this.entity.AccountId}`;
     
    }
    else
      return 'NEW ACCOUNT';
    
  }
 
 
}