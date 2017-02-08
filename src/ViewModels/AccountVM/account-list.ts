
import {ListViewModel} from '../../models//list-view-model';
import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';
import {AccountService} from './account-service';

@inject(AppRouter, AccountService)
export class AccountList extends ListViewModel {
  constructor(router, service) {
    super('accounts', router, service)
  }
  
}
export class SearchUserNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.UserName && x.UserName.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Info.Name && x.Info.Name.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchAccountTypeValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.AccountType && x.AccountType.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchAddressValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Info.Address && x.Info.Address.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}