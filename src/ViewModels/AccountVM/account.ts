
import {EntityViewModel} from '../../models//entity-view-model';
import {inject} from 'aurelia-dependency-injection';
import {AccountService} from './account-service';


@inject(AccountService)
export class Account extends EntityViewModel {


  constructor(service) {
    super(service);

  }

  get title() {
    if (this.entity.AccountId) {
      return `Account #${this.entity.AccountId}`;
     
    }
    else
      return 'NEW ACCOUNT';
    
  }
}