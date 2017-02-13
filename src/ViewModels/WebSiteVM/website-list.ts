
import {ListViewModel} from '../../models//list-view-model';
import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';
import {Services} from './services';

@inject(AppRouter,Services)
export class WebSiteList extends ListViewModel {
  constructor(router, service) {
    super('websites', router, service)
  }
  
}
export class SearchNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Name && x.Name.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchUrlValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.Url && x.Url.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
export class SearchDisplayNameValueConverter {
  toView(array, obj) {

    if (obj == "") {
      return array;
    } else if (obj) {
      let filteredArr = array.filter(x => x.DisplayName && x.DisplayName.toLowerCase().indexOf(obj.toLowerCase()) !== -1);

      return filteredArr;
    }
    return array;
  }
}
